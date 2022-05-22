import "./shop.styles.scss";

import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categories).map((key, index) => {
        const { title, items } = categories[key];

        const products = items.filter((_, index) => index < 4);
        return (
          <CategoryPreview key={index} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
