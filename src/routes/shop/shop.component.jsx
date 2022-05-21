import "./shop.styles.scss";

import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categories: products } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {Object.keys(products).map((key, index) => {
        const { items } = products[key];
        console.log(items);

        return items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ));
      })}
    </div>
  );
};

export default Shop;
