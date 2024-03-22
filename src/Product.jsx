import { useState } from "react";
import styles from "./Product.module.css";
const Product = ({ item, cart, setCart }) => {
  const [amount, setAmount] = useState(0);
  function increaseAmount() {
    setAmount(amount + 1);
  }
  function decreaseAmount() {
    if (amount > 0) setAmount(amount - 1);
  }
  function changeValue(value) {
    setAmount(value);
  }
  function handleAddToCart(item, amount) {
    if (amount > 0) {
      let cartCopy = cart.filter((cartItem) => cartItem.title !== item.title);
      setCart([...cartCopy, { ...item, amount: amount }]);
    }
  }
  return (
    <>
      <div className={styles.product}>
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
            <input
              className={styles.amountButton}
              type="button"
              value="-"
              onClick={() => {
                decreaseAmount();
              }}
            />
            <input
              className=""
              type="text"
              name=""
              id="amount"
              value={amount}
              onChange={(e) => {
                changeValue(e.target.value);
              }}
            />
            <input
              className={styles.amountButton}
              type="button"
              value="+"
              onClick={() => {
                increaseAmount();
              }}
            />
          </div>
          <input
            className={styles.amountButton}
            type="button"
            value="Add to cart"
            onClick={() => {
              handleAddToCart(item, amount);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Product;
