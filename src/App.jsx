import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="navbar">
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="cart">Cart</Link>
        </div>
      </div>
      <Outlet />
      <div id="footer">
        <p>Footer</p>
      </div>
    </>
  );
}

export default App;
