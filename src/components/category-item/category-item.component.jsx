import { useNavigate } from "react-router-dom";

import "./category-item.styles.scss";

const CategoryItem = ({ category: { title, imageUrl } }) => {
  const navigate = useNavigate();
  
  const categoryClickHandler = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <div className="category-container" onClick={categoryClickHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
