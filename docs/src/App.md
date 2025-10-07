# React App

## Folder Structure

```
.
├── App.jsx
├── App.css
├── auth
│   ├── forgotPass.jsx
│   ├── signIn.jsx
│   └── signUp.jsx
├── components
│   ├── footer.jsx
│   ├── header.jsx
│   └── notFound.jsx
├── (dashboard)
│   └── page.jsx
├── report
│   ├── board.jsx
│   ├── create.jsx
│   └── page.jsx
├── criminal
│   ├── board.jsx
│   └── page.jsx
└── routes
    └── routes.js
```

## Description

A React application with user authentication, routing, and feature modules for reports and criminals. The application provides a dashboard, sign-in, sign-up, forgot password functionality, and separate boards for reports and criminals.

## How to Use

1.  **Installation:**
    *   Ensure you have Node.js and npm/yarn installed.
    *   Run `npm install` or `yarn install` to install dependencies.

2.  **Run:**
    *   Run `npm start` or `yarn start` to start the development server.
    *   Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

3.  **Routes:**
    *   `/signin`: Sign-in page
    *   `/signup`: Sign-up page
    *   `/forgot-pass`: Forgot password page
    *   `/`: Dashboard
    *   `/reports`: Report board
    *   `/report/:uid`: Report detail page
    *   `/create-report`: Create report page
    *   `/criminals`: Criminal board
    *   `/criminal/:id`: Criminal detail page
    *   `/*`: 404 Not Found

## Technologies Used

*   React
*   React Router DOM
*   JSX
*   CSS
*   JavaScript

## Architecture or Code Overview

*   **`App.jsx`**: Main application component. Manages routing, user context, and overall layout.
*   **`Routes`**: Uses `react-router-dom` to define application routes.
*   **`UserContext`**: Provides user authentication state throughout the application.
*   **Authentication:** Implements Sign-in, Sign-up and Forgot password functionality.
*   **Features:** Includes Report and Criminal management with boards and detail views.
*   **Layout**: Utilizes `Header` and `Footer` components for consistent UI across pages.
*   **Route Protections**: `AuthRoutes` and `UserRoutes` are used to secure specific routes depending on user authentication status.

## Known Issues / Improvements

*   Implement actual authentication logic.
*   Add data fetching and storage for reports and criminals.
*   Improve styling and UI components.
*   Add error handling and loading states.
*   Add more robust testing.

## Additional Notes or References

*   Uses `UserContext` for global state management.
*   Leverages React Router for navigation.