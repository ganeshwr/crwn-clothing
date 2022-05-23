import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";
import { ShopContainer } from "./shop.styles";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <ShopContainer>
      {Object.keys(categories).map((key, index) => {
        const { title, items } = categories[key];

        const products = items.filter((_, index) => index < 4);
        return (
          <CategoryPreview key={index} title={title} products={products} />
        );
      })}
    </ShopContainer>
  );
};

export default Shop;
