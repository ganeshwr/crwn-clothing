import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";
import "./shop-category.styles.scss";

const ShopCategory = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [data, setData] = useState(categories[category]);

  useEffect(() => {
    setData(categories[category]);
  }, [categories, category]);

  return (
    <>
      {data && (
        <CategoryPreview
          title={data.title}
          products={data.items}
          showAll={true}
        />
      )}
    </>
  );
};

export default ShopCategory;
