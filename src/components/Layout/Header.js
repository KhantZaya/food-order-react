import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
