import "./checkout.styles.scss";

import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const Checkout = () => {
  const { cartItems, updateCart, removeProduct } =
    useContext(CartContext);

  const totalPrice = () => {
    return cartItems.reduce(
      (prev, curr) => (prev += curr.quantity * curr.price),
      0
    );
  };

  return (
    <div>
      <ol>
        {cartItems.map((item) => {
          const { id, name, price, quantity, imageUrl } = item;

          return (
            <li key={id} style={{ marginBottom: 50 }}>
              <p style={{ margin: 0 }}>{name}</p>
              <div>
                <button onClick={() => updateCart(item, "-")}>-</button>
                &nbsp;
                <strong>{quantity}</strong>
                &nbsp;
                <button onClick={() => updateCart(item, "+")}>+</button>
              </div>
              <br />
              <small>${price}</small>
              <br />
              <button onClick={() => removeProduct(id)}>Remove</button>
            </li>
          );
        })}
      </ol>
      <h1>Total price : ${totalPrice()}</h1>
    </div>
  );
};

export default Checkout;
