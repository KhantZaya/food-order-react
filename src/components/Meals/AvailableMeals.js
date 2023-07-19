import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mote Hin Gar",
    description: "rice noodle with fish soup",
    price: 15.99,
  },
  {
    id: "m2",
    name: "Coconut Milk Noodle",
    description: "Organic coconut milk with fresh nodle",
    price: 29.99,
  },
  {
    id: "m3",
    name: "Chicken Curry",
    description: "Quality Chicken with burmese special ingredient",
    price: 49.99,
  },
  {
    id: "m4",
    name: "Nang Gyi Salad",
    description: "Rice noodle with meat salad",
    price: 25.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
