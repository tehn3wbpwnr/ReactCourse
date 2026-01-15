import axios from 'axios';
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { PageNotFound } from './pages/PageNotFound'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

    fetchAppData();
  }, [])//[] dependency array to tell useEffect to run once


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
