import { useOutletContext } from "react-router-dom";

import styles from "./Cart.module.css";
const Cart = () => {
  const [cart, setCart] = useOutletContext();
  function handleRemove(item) {
    const fixedCart = cart.filter((cartItem) => cartItem != item);
    setCart([...fixedCart]);
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.itemList}>
          {cart.map((item) => {
            return (
              <div className={styles.item} key={item.id}>
                <p>{item.title}</p>
                <div className={styles.spacing}>
                  <p>amount: {item.amount}</p>
                  <input
                    type="button"
                    value="Remove"
                    onClick={() => {
                      handleRemove(item);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.total}>
          Total:
          {cart.reduce((sum, { price, amount }) => {
            return sum + price * amount;
          }, 0)}
          $
        </div>
      </div>
    </>
  );
};
export default Cart;
