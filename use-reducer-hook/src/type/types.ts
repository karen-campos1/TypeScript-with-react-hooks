export interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
  }
  
  export type ShoppingCartAction =
    | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
    | { type: 'REMOVE_ITEM'; payload: number };
  
  export const shoppingCartReducer = (state: ShoppingCartItem[], action: ShoppingCartAction): ShoppingCartItem[] => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload];
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  };
  
  export const availableItems: ShoppingCartItem[] = [
    { id: 1, name: 'Cherry', price: 10 },
    { id: 2, name: 'Gourmet Chocolate', price: 20 },
    { id: 3, name: 'Pinot Noir', price: 30 },
  ];