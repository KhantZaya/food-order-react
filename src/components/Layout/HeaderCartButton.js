import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>
        {/* {cartCtx.items.reduce((total, item) => {
          return total + item.amount;
        }, 0)} */}
        {cartCtx.totalAmount}
      </span>
    </button>
  );
};

export default HeaderCartButton;