import "./products.styles.scss";

import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Products = () => {
  const {products} = useContext(ProductsContext)
  
  return (
    <div>
      {products.map(({ id, name }) => {
        return <h1 key={id}>{name}</h1>;
      })}
    </div>
  );
};

export default Products;
