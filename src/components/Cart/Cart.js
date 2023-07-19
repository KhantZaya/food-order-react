import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => {
      return <li>{item.name}</li>;
    }
  );

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>00.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["btn--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.btn}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
