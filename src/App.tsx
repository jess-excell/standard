import { Routes, Route, Navigate } from 'react-router-dom'
import StoreScreen from './features/store/pages/StoreScreen'
import NotFound from './features/store/pages/404'
import ItemScreen from './features/store/pages/ItemScreen'
import LandingScreen from './features/store/pages/LandingScreen'
import CheckoutScreen from './features/store/pages/CheckoutScreen'

import './App.css'
import './features/store/styles/Store.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from "primereact/api"

import { useState } from 'react'
import BasketProvider from './features/store/contexts/BasketProvider'
import { getItem, setItem } from './features/store/utils/localStorage'

function App() {
  const [ accepted, setAccepted ] = useState<boolean>(() => {
    const accepted = getItem("disclaimer-accepted");
    return (accepted as boolean) || false;
  });

  function acceptDisclaimer() {
    setAccepted(true);
    setItem("disclaimer-accepted", true);
  }

  if (!accepted) {
    return (
      <PrimeReactProvider>
        <Routes>
          <Route path="/" element={<LandingScreen acceptDisclaimer={acceptDisclaimer} />} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </PrimeReactProvider>
    );
  };
  
  return (
    <PrimeReactProvider>
    <BasketProvider>
      <Routes>
        <Route path="/" element={<LandingScreen acceptDisclaimer={acceptDisclaimer} />} />
        <Route path="/store" element={<StoreScreen />} />
        <Route path="/store/:id" element={<ItemScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BasketProvider>
    </PrimeReactProvider>
  );
};

export default App;
