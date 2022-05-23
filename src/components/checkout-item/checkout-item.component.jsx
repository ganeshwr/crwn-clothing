import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { updateCart, removeProduct } = useContext(CartContext);
  const { id, name, price, quantity, imageUrl } = item;

  const removeProductHandler = () => removeProduct(id);
  const incrementItemHandler = () => updateCart(item, "+");
  const decrementItemHandler = () => updateCart(item, "-");

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price * quantity}</BaseSpan>
      <RemoveButton onClick={removeProductHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
