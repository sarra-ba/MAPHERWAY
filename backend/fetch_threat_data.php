<?php
// Function to fetch domain threat data from AlienVault OTX
function fetchDomainThreatData($api_key, $domain, $section) {
    // CTI API endpoint for domain indicators
    $url = "https://otx.alienvault.com/api/v1/indicators/domain/$domain/$section";

    // Initialize cURL
    $ch = curl_init($url);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "X-OTX-API-KEY: $api_key" // Use your API key for authentication
    ]);

    // Execute the cURL request
    $response = curl_exec($ch);
    $error = curl_error($ch);
    
    // Close cURL session
    curl_close($ch);
    
    // Check for cURL errors
    if ($error) {
        die("cURL Error: $error");
    }
    
    // Return the response as an associative array
    return json_decode($response, true);
}

// Example usage
$api_key = "ebe6023ea8f1fb2a47afe787c95ad07a6426542f6102a511e8fbd522187792fa"; // Your actual API key
$domain = "google.com"; // The domain you want to check
$section = "general"; // The section you want to fetch (e.g., 'general', 'malware')

// Fetch threat data for the specified domain and section
$threat_data = fetchDomainThreatData($api_key, $domain, $section);

// Output the fetched threat data (for debugging)
echo "<h2>Threat Data for Domain: $domain</h2>";
echo "<pre>";
print_r($threat_data);
echo "</pre>";

// If necessary, save the fetched threat data into your database
if (!empty($threat_data)) {
    // Process and save as per your database schema
    // Assuming you have a save function or existing logic here
}
?>
