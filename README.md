# Myntra - Clothing Store

Myntra is a web application for a clothing store that allows users to browse and search for various clothing items. This project consists of a backend server built with Express.js and a frontend client built with Vite.


## Features

- Browse all available clothing items.
- Search for clothing items by category (Men, Women, Kids).
- Responsive design for a better user experience.

## Prerequisites

- Node.js and npm installed on your local machine.

## Getting Started

Follow these steps to set up the project on your local machine.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd ZIMESHARE/backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node index.js
    ```

The backend server should now be running at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the client/myntra directory:
    ```bash
    cd ZIMESHARE/client/myntra
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

The frontend client should now be running at `http://localhost:5173`.

## Usage

### Viewing All Clothes

To view all available clothes, navigate to the root URL of the frontend client in your browser:


### Searching for Clothes

- Use the search bar to search for specific clothing items.
- Use the category links (Men, Women, Kids) to filter clothes by category.

## Troubleshooting

### CORS Issues

If you encounter CORS issues, ensure that the CORS middleware is properly configured in the backend:

```javascript
const cors = require('cors');
app.use(cors());


