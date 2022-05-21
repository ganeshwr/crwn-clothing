import "./product-card.styles.scss";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { updateCart } = useContext(CartContext);

  const addToCartHandler = () => {
    updateCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartHandler}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
