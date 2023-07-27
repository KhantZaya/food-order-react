import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [activeBtn, setActiveBtn] = useState();

  const itemsCount = cartCtx.items.reduce(
    (total, item) => (total += item.amount),
    0
  );

  useEffect(() => {
    setActiveBtn(true);
    const timer = setTimeout(() => {
      setActiveBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  let btnClass = `${classes.button} ${activeBtn ? classes.bump : ""}`;

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
