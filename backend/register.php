<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['name'], $data['email'], $data['password'], $data['role'])) {
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];
        $role = $data['role'];
        $police_station = isset($data['policeStation']) ? $data['policeStation'] : null;

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['message' => 'Invalid email format']);
            exit;
        }

        try {
            // Check if the user already exists in either table
            $stmt = $pdo->prepare("SELECT COUNT(*) FROM (SELECT email FROM users WHERE email = ? UNION SELECT email FROM police WHERE email = ?) AS combined");
            $stmt->execute([$email, $email]);
            $count = $stmt->fetchColumn();

            if ($count > 0) {
                http_response_code(400);
                echo json_encode(['message' => 'User already exists.']);
                exit;
            }

            // Hash the password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insert based on role
            if ($role === 'normal') {
                $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
                if ($stmt->execute([$name, $email, $hashedPassword])) {
                    echo json_encode(['message' => 'User registered successfully']);
                } else {
                    http_response_code(500);
                    echo json_encode(['message' => 'Registration failed']);
                }
            } else if ($role === 'police') {
                $stmt = $pdo->prepare("INSERT INTO police (name, email, password, police_station) VALUES (?, ?, ?, ?)");
                if ($stmt->execute([$name, $email, $hashedPassword, $police_station])) {
                    echo json_encode(['message' => 'Police officer registered successfully']);
                } else {
                    http_response_code(500);
                    echo json_encode(['message' => 'Registration failed']);
                }
            } else {
                http_response_code(400);
                echo json_encode(['message' => 'Invalid role specified']);
            }
        } catch (PDOException $e) {
            error_log("Registration error: " . $e->getMessage(), 3, 'error_log.txt');
            http_response_code(500);
            echo json_encode(['message' => 'Server error. Please try again later.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid input data']);
    }
}
?>
