# Safety Web Application

## Overview
This web application is designed to provide a secure platform for both normal users and police officers, ensuring the safety and well-being of users, particularly vulnerable women. The application features a dual interface to facilitate effective communication and incident management.

## Features

### 1. Dual Interfaces
- **Normal User Interface**: Accessible to regular users, allowing them to utilize standard functionalities.
- **Police Officer Interface**: Available upon logging in, this interface offers additional tools for handling alerts and tracking incidents.

### 2. Notification System
- The notification system prioritizes user safety by sending real-time alerts exclusively to police officers. This includes the precise location of women in distress, enabling swift police response to incidents.

### 3. Messaging System
- The integrated messaging system facilitates secure communication among all users, allowing normal users and police officers to communicate effectively during emergencies and other critical situations.

## IoT Smart Monitoring System for Public Spaces

### Project Description
This project involves deploying an IoT-based sensor network to monitor environmental conditions in public areas. Using an ESP32-CAM microcontroller connected to audio and light sensors, the system continuously collects data on noise levels and lighting conditions, improving public comfort and safety.

### Components

#### Hardware Setup
- **ESP32-CAM Microcontroller**: The primary controller that gathers data from sensors for transmission.
- **Audio Sensor**: Monitors ambient noise levels for real-time assessment of sound pollution.
- **Light Sensor**: Tracks lighting conditions to enhance safety and energy efficiency.

#### Data Transmission and Cloud Integration
- Sensor data is transmitted via Wi-Fi to a cloud platform hosted on **AWS** for centralized management, storage, and analysis.
- **Firebase Firestore**: Serves as the database for storing collected data, providing scalability and real-time data solutions.
- **REST API Endpoints**: Enable smooth communication between IoT devices and the cloud by sending sensor data securely.

#### User Interface
- A web application allows administrators and stakeholders to view real-time and historical data visualizations.
- Includes a voice assistant feature that interacts with users, providing insights on environmental conditions and stress management recommendations.

#### Data Processing and Alerts
- Incoming data is processed on the cloud server, triggering alerts when noise or light levels exceed preset thresholds. This feature aids authorities in promptly addressing issues like excessive noise or inadequate lighting.
- Future enhancements may include machine learning models for pattern detection and prediction of environmental changes.

## Technologies Used
- **Frontend**: PHP, JavaScript
- **Machine Learning**: Hugging Face (Mixtral)
- **IoT**: ESP32-CAM, audio sensors, light sensors
- **Cloud Services**: AWS, Firebase Firestore

## Installation and Setup
To set up the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```
3. Install the required dependencies:
   ```bash
   # For PHP dependencies, run:
   composer install

   # For JavaScript dependencies, run:
   npm install
   ```
4. Configure your environment variables as needed.

5. Start the server:
   ```bash
   # For PHP server
   php -S localhost:8000

   # For Node.js (if applicable)
   npm start
   ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for enhancements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
