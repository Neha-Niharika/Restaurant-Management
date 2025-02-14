import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        My Restaurant
      </Link>
      <div className="navbar-nav">
        <Link to="/Menu" className="nav-item nav-link">
          Menu
        </Link>
        <Link to="/Dish" className="nav-item nav-link">
          DishDetails
        </Link>
        <Link to="/Cart" className="nav-item nav-link">
          Cart
        </Link>
        <Link to="/Order" className="nav-item nav-link">
          Order
        </Link>
        <Link to="/Feedback" className="nav-item nav-link">
          Feedback
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
