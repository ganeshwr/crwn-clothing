import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/categories.selector";

const ShopCategory = () => {
  const categories = useSelector(selectCategories);
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
