import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/categories.selector";
import { ShopContainer } from "./shop.styles";
import {
  addCollectionAndDocument,
  getCollectionAndDocument,
} from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch(); // will only create once, it won't change
  const categories = useSelector(selectCategories);

  // Set Categories
  // ==============
  // Trigger only once
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA, "title");
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCollectionAndDocument("categories");
      dispatch(setCategories(response));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
