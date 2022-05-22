import { useContext } from "react";
import { useParams } from "react-router-dom";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";
import "./shop-category.styles.scss";

const ShopCategory = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();

  const isCategoriesEmpty = Object.keys(categories).length <= 0;
  const data = isCategoriesEmpty ? {} : categories[category];

  return (
    <div>
      <CategoryPreview
        title={data.title || ""}
        products={data.items || []}
        showAll={true}
      />
    </div>
  );
};

export default ShopCategory;