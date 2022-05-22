import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const productsJSX = products
    .filter((_, index) => index < 4)
    .map((product) => <ProductCard key={product.id} product={product} />);

  const categoryClickHandler = () => {
    navigate(title.toLowerCase());
  };

  return (
    <div className="shop-category-container">
      <h2>
        <span className="title" onClick={categoryClickHandler}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">{productsJSX}</div>
    </div>
  );
};

export default CategoryPreview;
