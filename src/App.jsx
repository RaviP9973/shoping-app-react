import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f6fa;
`;

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppContainer>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <>
                      <Header />
                      <Home />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <PrivateRoute>
                    <>
                      <Header />
                      <ProductList />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <PrivateRoute>
                    <>
                      <Header />
                      <ProductDetail />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <>
                      <Header />
                      <Cart />
                    </>
                  </PrivateRoute>
                }
              />
            </Routes>
          </AppContainer>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
