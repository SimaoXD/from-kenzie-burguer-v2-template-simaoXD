import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { ICartContext, iProducts } from './@types';

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<iProducts[]>([]);
  const navigate = useNavigate();
  const token: any = localStorage.getItem('@TOKEN');

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await api.get('products', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error(error);

  //       navigate('/');
  //     }
  //   };

  //   if (token) {
  //     getProducts();
  //   } else {
  //     navigate('/');
  //   }
  // }, [token, navigate]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
