import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Cart from "./component/Cart";
import Dish from "./component/Dish";
import Feedback from "./component/Feedback";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Order from "./component/Order";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
