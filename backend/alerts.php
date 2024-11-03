<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

include 'connect.php';

if (!isset($pdo)) {
    die(json_encode(['error' => 'Database connection not established.']));
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['latitude'], $data['longitude'], $data['status'])) {
    $latitude = $data['latitude'];
    $longitude = $data['longitude'];
    $status = $data['status'];

    $sql = "INSERT INTO alerts (latitude, longitude, status) VALUES (:latitude, :longitude, :status)";

    try {
        // Begin transaction
        $pdo->beginTransaction();

        // Insert alert
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':latitude', $latitude);
        $stmt->bindParam(':longitude', $longitude);
        $stmt->bindParam(':status', $status);
        $stmt->execute();

        // Get the IDs of all police officers
        $policeStmt = $pdo->query("SELECT id FROM police");
        $policeIds = $policeStmt->fetchAll(PDO::FETCH_COLUMN);

        // Prepare notification SQL
        $notificationSql = "INSERT INTO notifications (police_id, message) VALUES (:police_id, :message)";
        $notificationStmt = $pdo->prepare($notificationSql);

        // Prepare the notification message
        $message = "A new alert has been registered at Latitude: $latitude, Longitude: $longitude, Status: $status";

        // Insert notifications for each police officer
        foreach ($policeIds as $policeId) {
            $notificationStmt->bindParam(':police_id', $policeId);
            $notificationStmt->bindParam(':message', $message);
            $notificationStmt->execute();
        }

        // Commit the transaction
        $pdo->commit();

        echo json_encode(['message' => 'Alert saved successfully and notifications sent.']);
    } catch (PDOException $e) {
        // Rollback transaction if an error occurs
        $pdo->rollBack();
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid input data.']);
}

$pdo = null; // Close the database connection
?>
