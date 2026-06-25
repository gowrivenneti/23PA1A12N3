# Notification System Design

# Stage 1 – Logging Middleware

## Objective

Develop a reusable logging middleware that communicates with the AffordMed Logging API to record application events in a standardized format.

## Description

The logging middleware is implemented as a standalone module that can be integrated into any frontend component. It authenticates using the provided credentials, securely communicates with the logging service, and records application events such as API requests, user interactions, and error messages.

## Features

* User Authentication using the provided Auth API
* Reusable Logger Function
* Logging API Integration
* Secure Access Token Management using Environment Variables
* Standardized Log Format
* Error Handling for failed logging requests

## Technologies Used

* Node.js
* JavaScript (ES6)
* Axios
* Environment Variables (.env)

## Workflow

```text
Application Event
        │
        ▼
 Logger Function
        │
        ▼
 Logging API
        │
        ▼
 Log Stored Successfully
```


<img width="948" height="493" alt="Screenshot 2026-06-25 160335" src="https://github.com/user-attachments/assets/94764766-2a38-4c13-ae79-43d1a967fc2f" />


<img width="945" height="497" alt="Screenshot 2026-06-25 160437" src="https://github.com/user-attachments/assets/bb21f1b0-14a1-42fd-b3f7-18b874c9f88e" />

# Stage 2 – Notification System
Overview

The notification system is a React application that fetches and displays notifications from the Notification API with filtering and pagination support.

Architecture
Notification API
        │
        ▼
Axios Service
        │
        ▼
Custom Hook
        │
        ▼
React Components
Main Components
Notification API
Notification Card
Notification Filter
Notifications Page
Priority Notifications Page
Features
Fetch notifications
Filter by notification type
Pagination
Priority notifications
Responsive interface
Priority Order
Notification Type	Priority
Placement	3
Result	2
Event	1

Notifications with the same priority are ordered by the latest timestamp.

Design Approach
Component-based architecture
Custom React Hooks
Axios for API communication
Material UI for UI components
Modular and reusable code
