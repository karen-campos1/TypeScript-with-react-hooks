import React, { useReducer, useState } from 'react';
import { ShoppingCartItem, ShoppingCartAction, shoppingCartReducer, availableItems } from '../type/types';

const initialCartState: ShoppingCartItem[] = [];

const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCartState);
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>(undefined);

  const addItemToCart = () => {
    const selectedItem = availableItems.find(item => item.id === selectedItemId);
    if (selectedItem) {
      dispatch({ type: 'ADD_ITEM', payload: selectedItem });
    }
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="item-selector">
        <select value={selectedItemId} onChange={(e) => setSelectedItemId(Number(e.target.value))}>
          <option value={undefined}>Select an item</option>
          {availableItems.map(item => (
            <option key={item.id} value={item.id}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>
        <button onClick={addItemToCart} disabled={selectedItemId === undefined}>Add to Cart</button>
      </div>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Cost: ${calculateTotalCost()}</p>
    </div>
  );
};

export default ShoppingCart;