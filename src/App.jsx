import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<Authentication />} />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
