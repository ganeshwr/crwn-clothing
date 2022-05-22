import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import ShopCategory from "./routes/shop-category/shop-category.component";

import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

const App = () => {
  return (
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop">
                  <Route index element={<Shop />} />
                  <Route path=":category" element={<ShopCategory />} />
                </Route>
                <Route path="sign-in" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  );
};

export default App;
