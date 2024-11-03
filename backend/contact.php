<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
header('Content-Type: application/json'); 
include 'connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$errors = [];
if (empty($data['email'])) {
    $errors['email'] = 'Email is required.';
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Email is invalid.';
}

if (empty($data['subject'])) {
    $errors['subject'] = 'Subject is required.';
}

if (empty($data['message'])) {
    $errors['message'] = 'Message is required.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}


$stmt = $conn->prepare("INSERT INTO contacts (email, subject, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $data['email'], $data['subject'], $data['message']);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message.']);
}

$stmt->close();
$conn->close();
?>
