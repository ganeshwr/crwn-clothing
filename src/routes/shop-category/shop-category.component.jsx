import { useLocation } from "react-router-dom";

import "./shop-category.styles.scss";

const ShopCategory = ({ title, products }) => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="shop-category-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
          products.filter((_, index)=>{
            
          })
        }
      </div>
    </div>
  );
};

export default ShopCategory;
