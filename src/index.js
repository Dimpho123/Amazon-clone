import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from "./StateProvider";
import { Reducer, initialState } from "./Reducer";
import { CartProvider } from "./CartContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
  <BrowserRouter>
   <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
  </CartProvider>
);
