import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CartPage from './pages/CartPage';

import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { // only for testing - then page will be added
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  { 
    path: '/checkout',
    element: <Checkout></Checkout>,
  },
  { 
    path: '/product-detail/:id',
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;