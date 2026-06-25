## Logging Middleware
# Campus Notification Frontend

## Overview

This project is the frontend implementation for the AffordMed Campus Evaluation. It is built using React and Material UI to display campus notifications with filtering, pagination, and priority notification support.

---

## Tech Stack

- React
- Vite
- Material UI (MUI)
- Axios
- React Router DOM

---

## Features

- View all notifications
- Filter notifications by type
  - All
  - Placement
  - Result
  - Event
- Pagination support
- Priority Notifications page
- Loading and error handling
- Logging Middleware integration
- Responsive Material UI interface

---

## Folder Structure

```
src
│
├── api
│   └── notifications.js
│
├── components
│   ├── NotificationCard.jsx
│   ├── NotificationFilter.jsx
│   └── Navbar.jsx
│
├── hooks
│   └── useNotifications.js
│
├── pages
│   ├── NotificationsPage.jsx
│   └── PriorityNotificationsPage.jsx
│
├── utils
│   └── priority.js
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to the frontend folder

```bash
cd notification-app-fe
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

Start the development server

```bash
npm run dev
```

The application will run at

```
http://localhost:5173
```

---

## API

Notifications API

```
GET http://4.224.186.213/evaluation-service/notifications
```

Supported query parameters

- page
- limit
- notification_type

Authorization

```
Bearer <Access Token>
```

---

## Logging Middleware

The application integrates the reusable logging middleware developed in the previous stage to log important frontend events such as:

- Notification fetch
- Filter changes
- Page changes
- API errors

---

## Priority Notifications

Priority is calculated using the following order:

| Type | Priority |
|------|---------:|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

If two notifications have the same priority, the most recent notification is displayed first.

---

## Author

Lakshmi Gowri Venneti

AffordMed Campus Evaluation Submission