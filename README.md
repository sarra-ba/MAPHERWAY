Web Application Overview
This web application is designed to support both normal users and police officers, providing a secure platform to ensure the safety and well-being of users, especially vulnerable women. Here are the main features and functionalities:
1. Dual Interfaces
The application offers two interfaces:
Normal User Interface: For regular users who can access the application’s standard functionalities.
Police Officer Interface: Accessible only after logging in as a police officer. This interface provides additional features for handling alerts and tracking incidents.
2. Notification System
Our notification system is designed to prioritize the safety of users. It sends real-time alerts exclusively to police officers, including the exact location of the targeted women in distress. This system ensures that police officers can respond promptly to incidents as they occur.
3. Messaging System
The app includes a messaging system to facilitate communication among all users. This feature allows both normal users and police officers to communicate within the platform, promoting swift and secure exchanges in case of emergencies or other critical situations.

IoT Smart Monitoring System for Public Spaces
This project involves the deployment of an IoT-based sensor network to monitor environmental conditions in public spaces. By leveraging an ESP32-CAM microcontroller connected to audio and light sensors, this system continuously collects data on noise levels and lighting conditions. These sensors provide real-time monitoring to help manage and optimize the environment, improving public comfort and safety.
Project Structure
Hardware Setup:
ESP32-CAM Microcontroller: This device serves as the primary controller, gathering data from attached sensors and processing it for transmission.
Audio Sensor: Measures ambient noise levels, allowing for real-time monitoring of sound pollution in public spaces.
Light Sensor: Monitors lighting conditions, useful for adjusting lighting systems to improve safety and energy efficiency.
Data Transmission and Cloud Integration:
Sensor data is sent via Wi-Fi to a cloud platform hosted on AWS. This enables centralized data management, storage, and analysis.
Firebase Firestore: Used as the database to store the collected data, providing a scalable and real-time data solution for future analytics.
REST API Endpoints: Data from sensors is sent to Firebase through REST API calls, ensuring smooth and secure communication between the IoT devices and the cloud.
User Interface:
A web application serves as the user interface, allowing administrators and stakeholders to view real-time and historical data visualizations.
The app includes a voice assistant feature that interacts with users to provide insights on environmental conditions and stress management recommendations based on monitored data.
Data Processing and Alerts:
On the cloud server, incoming data is processed to trigger alerts when noise or light levels exceed preset thresholds. This can help authorities quickly address issues like excessive noise or insufficient lighting.
In the future, machine learning models could be integrated to detect patterns and predict environmental changes.

Web Application Overview
This web application is designed to support both normal users and police officers, providing a secure platform to ensure the safety and well-being of users, especially vulnerable women. Here are the main features and functionalities:
1. Dual Interfaces
The application offers two interfaces:
Normal User Interface: For regular users who can access the application’s standard functionalities.
Police Officer Interface: Accessible only after logging in as a police officer. This interface provides additional features for handling alerts and tracking incidents.
2. Notification System
Our notification system is designed to prioritize the safety of users. It sends real-time alerts exclusively to police officers, including the exact location of the targeted women in distress. This system ensures that police officers can respond promptly to incidents as they occur.
3. Messaging System
The app includes a messaging system to facilitate communication among all users. This feature allows both normal users and police officers to communicate within the platform, promoting swift and secure exchanges in case of emergencies or other critical situations.