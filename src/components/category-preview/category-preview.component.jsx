import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Preview,
  ShowAll,
  Title,
  ViewAll,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products, showAll = false }) => {
  const navigate = useNavigate();

  const productsJSX = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const categoryClickHandler = () => {
    navigate(title.toLowerCase());
  };

  return (
    <CategoryPreviewContainer>
      <ShowAll showAll={showAll}>
        <Title onClick={showAll ? null : categoryClickHandler}>
          {title.toUpperCase()}
        </Title>
        <br />
        {!showAll && <ViewAll to={title.toLowerCase()}>view all</ViewAll>}
      </ShowAll>
      <Preview>{productsJSX}</Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
