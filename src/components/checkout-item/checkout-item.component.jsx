import "./checkout-item.styles.scss";

import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { updateCart, removeProduct } = useContext(CartContext);
  const { id, name, price, quantity, imageUrl } = item;

  const removeProductHandler = () => removeProduct(id);
  const incrementItemHandler = () => updateCart(item, "+");
  const decrementItemHandler = () => updateCart(item, "-");

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItemHandler}> &#10094; </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementItemHandler}> &#10095; </div>
      </span>
      <span className="price">${price*quantity}</span>
      <div className="remove-button" onClick={removeProductHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
