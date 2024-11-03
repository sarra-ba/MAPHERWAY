<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['audio']) && $_FILES['audio']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['audio']['name']);

        if (move_uploaded_file($_FILES['audio']['tmp_name'], $uploadFile)) {
            echo json_encode(['message' => 'File successfully uploaded.', 'file' => $uploadFile]);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Failed to move uploaded file.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'No audio file uploaded.']);
    }
}
?>
