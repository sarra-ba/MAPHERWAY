<?php
// Database configuration
$servername = "localhost"; // Use 'localhost' for local development
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password (default is empty for root)
$dbname = "soc-platform"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully"; // Optional: to confirm connection
?>
