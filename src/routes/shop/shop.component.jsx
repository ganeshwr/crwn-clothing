import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import {selectCategories} from "../../store/categories/categories.selector"
import { ShopContainer } from "./shop.styles";

const Shop = () => {
  const categories = useSelector(selectCategories)

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
