import { CarrinhoProvider } from './providers/useContext/Cart';
import { CartProvider } from './providers/useContext/CartContext';
import { UserProvider } from './providers/useContext/useContext';
import Router from './routes/routes';
import { GlobalStyles } from './styles/global';
import React from "react";


const App = () => (
  <CarrinhoProvider >
    <GlobalStyles />
    <CartProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </CartProvider>

  </CarrinhoProvider>
);

export default App;
