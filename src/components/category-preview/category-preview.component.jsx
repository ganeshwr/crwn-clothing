import { useNavigate, Link } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products, showAll = false }) => {
  const navigate = useNavigate();

  const productsJSX = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const categoryClickHandler = () => {
    navigate(title.toLowerCase());
  };

  return (
    <div className="category-preview-container">
      <h2 className={`${showAll ? "show-all" : ""}`}>
        <span className="title" onClick={showAll ? null : categoryClickHandler}>
          {title.toUpperCase()}
        </span>
        <br />
        {!showAll && (
          <Link to={title.toLowerCase()} className="view-all">
            view all
          </Link>
        )}
      </h2>
      <div className="preview">{productsJSX}</div>
    </div>
  );
};

export default CategoryPreview;
