<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
header('Content-Type: application/json'); 
include 'connect.php';



// Get JSON input
$data = json_decode(file_get_contents('php://input'), true);
$user_id = $data['user_id'];
$latitude = $data['latitude'];
$longitude = $data['longitude'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO locations (user_id, latitude, longitude) VALUES (?, ?, ?)");
$stmt->bind_param("sdd", $user_id, $latitude, $longitude);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Location saved!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to save location.']);
}

$stmt->close();
$conn->close();
?>
