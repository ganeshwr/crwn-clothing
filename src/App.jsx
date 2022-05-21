import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Products from "./routes/products/products.component";

import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Products />} />
              <Route path="sign-in" element={<Authentication />} />
            </Route>
          </Routes>
        </Router>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
