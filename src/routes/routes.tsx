import { Routes, Route } from 'react-router-dom';
import AutoLogin from '../components/AutoLogin';
import AutoRoutes from '../components/AutoRoutes';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';
import { CartProvider } from '../providers/useContext/CartContext';

const Router = () => (
  <Routes>
    <Route element={<AutoLogin />}>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element={<LoginPage />} />
    </Route>
    <Route element={<AutoRoutes />}>
      <Route
        path='/shop'
        element={
          <CartProvider>
            <ShopPage />{' '}
          </CartProvider>
        }
      />
    </Route>
  </Routes>
);

export default Router;
