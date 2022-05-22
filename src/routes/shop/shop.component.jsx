import "./shop.styles.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  const navigate = useNavigate();

  return (
    <>
      {Object.keys(categories).map((key, index) => {
        const { title, items } = categories[key];

        const productsJSX = items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ));

        const categoryClickHandler = () => {
          navigate(title.toLowerCase());
        };

        return (
          <div className="shop-category-container" key={index}>
            <h1 className="title" onClick={categoryClickHandler}>
              {title.toUpperCase()}
            </h1>
            <div className="products-container">{productsJSX}</div>
          </div>
        );
      })}
    </>
  );
};

export default Shop;
