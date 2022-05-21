import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocument } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // Trigger only once
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA, "title");
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
