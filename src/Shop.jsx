import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";
import Product from "./Product";

const Shop = () => {
  const [cart, setCart] = useOutletContext();
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        if (!response.ok) {
          throw new Error(`Http error. Response: ${response.status}`);
        }
        const json = await response.json();
        setdata(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setdata(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>An error occured: {error}</h1>}
      {data && (
        <div id="main">
          <div className={styles.items}>
            {data.map((item) => (
              <Product
                item={item}
                key={item.id}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Shop;
