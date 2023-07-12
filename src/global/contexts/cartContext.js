import React from "react";
import useCart from "../../pages/order/cartHook";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cartState, dispatch] = useCart();

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
