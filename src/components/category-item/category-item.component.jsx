import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.styles";

const CategoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();

  const categoryClickHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={categoryClickHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
