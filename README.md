# Shopping App

A modern e-commerce application built with React, featuring user authentication, product browsing, and shopping cart functionality.

## Features

- **User Authentication**
  - Login and Signup functionality
  - Secure token-based authentication
  - Protected routes for authenticated users

- **Product Management**
  - Browse product catalog
  - View detailed product information
  - Search and filter products

- **Shopping Cart**
  - Add/remove items from cart
  - Update item quantities
  - View cart total

- **Responsive Design**
  - Mobile-friendly interface
  - Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**
  - React
  - React Router for navigation
  - Context API for state management
  - Tailwind CSS for styling

- **API**
  - DummyJSON API for product data and authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/shopping-app.git
   cd shopping-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/       # Reusable UI components
├── context/          # Context providers (Auth, Cart)
├── pages/            # Page components
├── services/         # API services
├── App.jsx           # Main application component
└── index.js          # Application entry point
```

## Authentication

The application uses token-based authentication with the DummyJSON API. Users can:

- Create a new account
- Log in with existing credentials
- Access protected routes when authenticated
- Log out to end their session

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing the API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the frontend library
