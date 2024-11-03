<?php

include 'connect.php';

if (!isset($pdo)) {
    die(json_encode(['error' => 'Database connection not established.']));
}

$sql_police = "CREATE TABLE IF NOT EXISTS police (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    police_station VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

try {
    $pdo->exec($sql_police);
    echo json_encode(['message' => "Table 'police' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'police': " . $e->getMessage()]);
}

$sql_products = "CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

try {
    $pdo->exec($sql_products);
    echo json_encode(['message' => "Table 'products' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'products': " . $e->getMessage()]);
}


$sql_threats = "CREATE TABLE IF NOT EXISTS threats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

try {
    $pdo->exec($sql_threats);
    echo json_encode(['message' => "Table 'threats' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'threats': " . $e->getMessage()]);
}

$sql_alerts = "CREATE TABLE IF NOT EXISTS alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'resolved') DEFAULT 'active'
)";

try {
    $pdo->exec($sql_alerts);
    echo json_encode(['message' => "Table 'alerts' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'alerts': " . $e->getMessage()]);
}

$sql_users = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

try {
    $pdo->exec($sql_users);
    echo json_encode(['message' => "Table 'users' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'users': " . $e->getMessage()]);
}

$sql_contacts = "CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

try {
    $pdo->exec($sql_contacts);
    echo json_encode(['message' => "Table 'contacts' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'contacts': " . $e->getMessage()]);
}


$sql_notifications = "CREATE TABLE IF NOT EXISTS notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    police_id INT NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (police_id) REFERENCES police(id) ON DELETE CASCADE
)";

try {
    $pdo->exec($sql_notifications);
    echo json_encode(['message' => "Table 'notifications' created successfully."]);
} catch (PDOException $e) {
    echo json_encode(['error' => "Error creating table 'notifications': " . $e->getMessage()]);
}

$pdo = null; 
?>
