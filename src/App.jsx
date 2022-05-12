import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<h1>SHOP PAGE</h1>} />
          <Route path="sign-in" element={<SignIn/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
