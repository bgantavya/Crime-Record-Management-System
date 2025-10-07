# Crime Reporting System

## Folder Structure

```
├── public
├── src
│   ├── (dashboard)
│   │   └── page.jsx
│   ├── DB
│   │   └── action.js
│   ├── api
│   │   ├── createReport.js
│   │   ├── getReports.js
│   │   ├── searchCriminal.js
│   │   └── searchReport.js
│   ├── auth
│   │   ├── forgotPass.jsx
│   │   ├── signIn.jsx
│   │   └── signUp.jsx
│   ├── criminal
│   │   ├── board.jsx
│   │   └── page.jsx
│   ├── report
│   │   ├── board.jsx
│   │   ├── create.jsx
│   │   └── page.jsx
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

## Description

This project is a Crime Reporting System built with React and Vite. It allows users to create and view crime reports, search for criminals, and includes user authentication features.

## How to Use

1.  **Installation:**
    ```bash
    npm install
    ```
2.  **Run the application:**
    ```bash
    npm run dev
    ```
3.  **Access the application** in your browser at the specified address (usually `http://localhost:5173/`).

## Technologies Used

*   React
*   Vite
*   JavaScript
*   HTML

## Architecture or Code Overview

*   **`src/App.jsx`**:  Main application component.
*   **`src/main.jsx`**: Entry point for the application, rendering the `App` component.
*   **`src/auth`**:  Contains components for user authentication (sign-in, sign-up, forgot password).
*   **`src/api`**:  Handles API interactions (creating reports, retrieving reports, searching criminals, searching reports).
*   **`src/DB/action.js`**: Database related actions
*   **`src/criminal`**: Contains components for managing and viewing criminal information.
*   **`src/report`**: Contains components for creating, viewing, and managing crime reports.
*   **`src/(dashboard)`**: Dashboard component
*   **`public`**: Static assets.
*   **`index.html`**:  Entry point HTML file.

## Known Issues / Improvements

*   No description is provided.
*   No database or backend integration implemented.

## Additional Notes or References

Based on a Vite React template.