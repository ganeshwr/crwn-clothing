import "./shop.styles.scss";

import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((key, index) => {
        const { title, items } = categories[key];

        const productsJSX = items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ));

        return (
          <Fragment key={index}>
            <h1>{title.toUpperCase()}</h1>
            <div className="products-container">{productsJSX}</div>
          </Fragment>
        );
      })}
    </>
  );
};

export default Shop;
