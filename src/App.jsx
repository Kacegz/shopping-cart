import { useState } from "react";
import styles from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import cartimg from "./assets/cart.svg";
import gem from "./assets/gem.svg";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.flexgap}>
          <Link to="/" className={styles.flex}>
            <span className={styles.flex}>
              <img src={gem} className={styles.gem} alt="" srcSet="" />
              Home
            </span>
          </Link>
          <Link to="shop">
            <div>Shop</div>
          </Link>
        </div>
        <Link to="cart">
          <div className={styles.flex}>
            <img src={cartimg} className={styles.navimg} alt="" srcSet="" />
            {cart.length}
          </div>
        </Link>
      </div>
      <div className={styles.main}>
        <Outlet context={[cart, setCart]} />
      </div>
    </>
  );
}

export default App;
