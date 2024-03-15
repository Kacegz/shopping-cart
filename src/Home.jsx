import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div>
            <h1 className={styles.logo}>Gilded Gemstone Atelier</h1>
          </div>
          <Link to="shop">
            <button className={styles.goshop}>Visit shop</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
