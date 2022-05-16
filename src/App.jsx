import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<h1>SHOP PAGE</h1>} />
          <Route path="sign-in" element={<Authentication/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
