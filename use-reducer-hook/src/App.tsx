import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Shopping Cart Example</h1>
      <ShoppingCart />
    </div>
  );
};

export default App;