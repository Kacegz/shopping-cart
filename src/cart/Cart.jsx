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
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <p>{item.title}</p>

                  <div className={styles.spacing}>
                    <p>Q:{item.amount}</p>
                    <p>{item.amount * item.price}$</p>
                    <input
                      className={styles.removeButton}
                      type="button"
                      value="Remove"
                      onClick={() => {
                        handleRemove(item);
                      }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.cartEmpty}>
              <h3>Cart is empty</h3>
            </div>
          )}
        </div>
        <div className={styles.total}>
          <h2>Summary</h2>
          <p>
            Total:
            {cart.reduce((sum, { price, amount }) => {
              return sum + price * amount;
            }, 0)}
            $
          </p>
          <input
            className={styles.checkoutButton}
            type="button"
            value="Checkout"
          />
        </div>
      </div>
    </>
  );
};
export default Cart;
