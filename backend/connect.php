<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "soc-platform"; 

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    error_log("Connection failed: " . $e->getMessage(), 3, 'error_log.txt'); 
    echo json_encode(['error' => 'Database connection failed']); 
    exit; 
}
?>
