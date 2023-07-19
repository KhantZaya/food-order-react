import classes from "./MealsSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Deliver to you</h2>
      <p>
        Choose your favorite meals from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chef!
      </p>
    </section>
  );
};

export default MealSummary;
