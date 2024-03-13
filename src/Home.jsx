import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div id="main">
        <h1>Welcome to the bonsai shop!</h1>
        <h2>
          <Link to="shop">Click here to start shopping</Link>
        </h2>
      </div>
    </>
  );
};
export default Home;
