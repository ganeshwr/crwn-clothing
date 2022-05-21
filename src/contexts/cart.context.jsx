import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  updateCart: () => null,
  removeProduct: () => null,
  cartTotalPrice: 0,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const JSONCartItems = window.localStorage.getItem("cartItems");

    if (JSONCartItems) setCartItems(JSON.parse(JSONCartItems));
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    const totalPrice = cartItems.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );
    setCartTotalPrice(totalPrice);

    const count = cartItems.reduce((prev, curr) => (prev += curr.quantity), 0);
    setCartCount(count);
  }, [cartItems]);

  const updateCart = (product, operator = "+") => {
    const findProduct = cartItems.findIndex((item) => item.id === product.id);

    if (findProduct > -1) {
      if (operator === "+") cartItems[findProduct].quantity++;
      else cartItems[findProduct].quantity--;

      if (cartItems[findProduct].quantity <= 0) removeProduct(product.id);
    } else cartItems.push({ ...product, quantity: 1 });

    setCartItems([...cartItems]);
  };

  const removeProduct = (id) => {
    const findProduct = cartItems.findIndex((item) => item.id === id);

    if (findProduct > -1) {
      cartItems.splice(findProduct, 1);
    }

    setCartItems([...cartItems]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateCart,
    removeProduct,
    cartTotalPrice,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
