import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import ShopCategory from "./routes/shop-category/shop-category.component";

import { setCurrentUser } from "./store/user/user.action";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch(); // will only create once, it won't change

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};

export default App;
