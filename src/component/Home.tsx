import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to Tasty Bits!</h1>
      <p>We deliver happiness to your doorsteps</p>
      <Link to="/Menu" className="btn btn-primary">
        View Menu
      </Link>
    </div>
  );
}

export default Home;
