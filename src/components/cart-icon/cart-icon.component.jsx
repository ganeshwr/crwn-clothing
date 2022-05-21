import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItems } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartItemsCount = cartItems.reduce(
    (prev, curr) => (prev += curr.quantity),
    0
  );

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
