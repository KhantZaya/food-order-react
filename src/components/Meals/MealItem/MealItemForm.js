import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsvalid, setAmountIsvalid] = useState(true);
  const inputAmountRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const itemAmount = inputAmountRef.current.value;
    const itemAmountNum = +itemAmount;
    if (
      itemAmount.trim().length === 0 ||
      itemAmountNum > 5 ||
      itemAmountNum < 0
    ) {
      setAmountIsvalid(false);
      return;
    }
    props.onAddMeal(itemAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        ref={inputAmountRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid ?? <span>Please entered the valid amount</span>}
    </form>
  );
};

export default MealItemForm;
