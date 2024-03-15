import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";

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
  function handleAddToCart(item) {
    console.log(item);
    setCart([...cart, item]);
  }
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>An error occured: {error}</div>}
      {data && (
        <div id="main">
          <div className={styles.items}>
            {data.map((item) => (
              <div key={item.id} className={styles.product}>
                <img
                  src={item.image}
                  alt="Product image"
                  srcSet=""
                  className={styles.productImg}
                />
                <div className={styles.productName}>
                  <p>{item.title}</p>
                  <p>Price: {item.price}$</p>
                </div>
                <div className={styles.options}>
                  <div className={styles.numbers}>
                    <input type="button" value="+" />
                    <input type="text" name="" id="amount" value="0" />
                    <input type="button" value="-" />
                  </div>
                  <input
                    type="button"
                    value="Add to cart"
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Shop;
