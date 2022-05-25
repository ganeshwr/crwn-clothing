import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  updateCart: () => null,
  removeProduct: () => null,
  cartTotalPrice: 0,
  cartCount: 0,
});

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotalPrice: 0,
  cartCount: 0,
};

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartTotalPrice, cartCount } = state;

  const setIsCartOpen = (toggle) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: toggle,
    });
  };

  const updateCartItemsReducer = (newCartItems) => {
    // // Set cart total price
    const newCartTotalPrice = newCartItems.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );

    // // Set cart items count
    const newCartCount = newCartItems.reduce(
      (prev, curr) => (prev += curr.quantity),
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotalPrice: newCartTotalPrice,
        cartCount: newCartCount,
      },
    });
  };

  // Get previously saved cart items in localStorage
  useEffect(() => {
    const JSONCartItems = window.localStorage.getItem("cartItems");

    if (JSONCartItems) updateCartItemsReducer(JSON.parse(JSONCartItems));
  }, []);

  // Storing current cart items to localStorage to persist the value in page reload (only if the items is not 0)
  useEffect(() => {
    if (cartItems.length > 0) {
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const updateCart = (product, operator = "+") => {
    const findProduct = cartItems.findIndex((item) => item.id === product.id);

    if (findProduct > -1) {
      if (operator === "+") cartItems[findProduct].quantity++;
      else cartItems[findProduct].quantity--;

      if (cartItems[findProduct].quantity <= 0) removeProduct(product.id);
    } else cartItems.push({ ...product, quantity: 1 });

    updateCartItemsReducer([...cartItems]);
  };

  const removeProduct = (id) => {
    const findProduct = cartItems.findIndex((item) => item.id === id);

    if (findProduct > -1) {
      cartItems.splice(findProduct, 1);
    }

    updateCartItemsReducer([...cartItems]);

    if (cartItems.length === 0)
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
