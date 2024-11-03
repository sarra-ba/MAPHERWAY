<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
header('Content-Type: application/json'); 
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $email = $data->email ?? '';
    $password = $data->password ?? '';

    if (!$email || !$password) {
        http_response_code(400);
        echo json_encode(['message' => 'Please enter both email and password.']);
        exit;
    }

    $stmt = $pdo->prepare("
        SELECT id, name, email, password, NULL AS police_station FROM users WHERE email = ? 
        UNION 
        SELECT id, name, email, password, police_station FROM police WHERE email = ?
    ");
    $stmt->execute([$email, $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $isPolice = isset($user['police_station']);

        echo json_encode([
            'message' => 'Login successful',
            'userId' => $user['id'], 
            'user' => [
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => $isPolice ? 'police' : 'user'
            ]
        ]);
        
    } else {
        http_response_code(401);
        echo json_encode(['message' => 'Invalid email or password']);
    }
}
?>
