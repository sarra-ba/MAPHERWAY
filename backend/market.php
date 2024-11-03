<?php
header('Content-Type: application/json'); // Set the content type to JSON
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from your frontend
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow headers
require 'connect.php'; // Include your database connection

try {
    // Adjust the SQL query to include all relevant fields from the products table
    $stmt = $pdo->query('SELECT id, name, description, price, image_url, category, created_at, updated_at FROM products');
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch as associative array

    // Check if products were found
    echo json_encode($products); // Return the products as a JSON response
} catch (PDOException $e) {
    // Handle the error
    echo json_encode(['error' => 'Failed to fetch products: ' . $e->getMessage()]);
}
