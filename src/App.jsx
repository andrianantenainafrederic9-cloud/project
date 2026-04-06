import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  useLocation 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider, useCart } from './context/CartContext';  // ✅ IMPORT CRITIQUE

function App() {
  return (
    <Router>
      <CartProvider>  {/* ✅ MAINTENANT DÉFINI ! */}
        <div className="App min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/produit/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

// ✅ ProtectedRoute - TOUS IMPORTS PRÉSENTS
function ProtectedRoute({ children }) {
  const location = useLocation();
  const { cartItems } = useCart();  // ✅ useCart disponible
  
  if (cartItems.length === 0) {
    return <Navigate to="/cart" state={{ from: location }} replace />;
  }
  
  return children;
}

export default App;