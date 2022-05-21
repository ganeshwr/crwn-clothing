import { createContext, useEffect, useState } from "react";

import {
  addCollectionAndDocument,
  getCollectionAndDocument,
} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categories: []
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = { categories, setCategories };

  // Trigger only once
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA, "title");
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCollectionAndDocument("categories");
      setCategories(response)
    };

    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
