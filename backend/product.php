<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from your frontend
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow headers
header('Content-Type: application/json'); // Set the content type to JSON

require 'connect.php'; // Include your database connection

try {
    // Prepare the SQL statement
    $stmt = $pdo->prepare('INSERT INTO products (name, description, price, image_url, category) VALUES (:name, :description, :price, :image_url, :category)');

    // Product details
    $name = 'Self-Defense Keychain';
    $description = 'A compact keychain for self-defense that can also be used as a flashlight.';
    $price = 19.99;
    $image_url = 'https://cdn11.bigcommerce.com/s-pecmny2vd/images/stencil/1280x1280/products/2655/5844/Black_Fire_Cat_Metal_Defensive_Keychain__07516.1431816303.1280.1280__11027.1559759916.jpg?c=2'; // Use a valid image URL
    $category = 'Self Defense';

    // Bind parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':image_url', $image_url);
    $stmt->bindParam(':category', $category);

    // Execute the statement
    $stmt->execute();

    // Return success response
    echo json_encode(['message' => 'Product added successfully!', 'product_id' => $pdo->lastInsertId()]);
} catch (PDOException $e) {
    // Handle any errors during the insertion
    echo json_encode(['error' => 'Failed to add product: ' . $e->getMessage()]);
}
?>
