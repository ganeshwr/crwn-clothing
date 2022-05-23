import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { updateCart } = useContext(CartContext);

  const addToCartHandler = () => {
    updateCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={product.imageUrl} alt={product.name} />
      <Footer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartHandler}
      >
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
