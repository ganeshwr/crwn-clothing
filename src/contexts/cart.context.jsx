import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const findProduct = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (findProduct > -1) cartItems[findProduct].quantity++;
    else cartItems.push({ ...product, quantity: 1 });

    setCartItems(cartItems.slice());
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
