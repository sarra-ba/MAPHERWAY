<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

include 'connect.php'; // Ensure this file contains your $pdo database connection

try {
    // Fetch notifications for police officers
    $stmt = $pdo->query("SELECT id, message, created_at FROM notifications ORDER BY created_at DESC");
    $notifications = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return notifications in JSON format
    echo json_encode($notifications);
} catch (PDOException $e) {
    // Log the error and return a 500 response
    error_log("Database error: " . $e->getMessage(), 3, 'error_log.txt');
    http_response_code(500);
    echo json_encode(['error' => 'Failed to retrieve notifications.']);
}

$pdo = null;
?>
