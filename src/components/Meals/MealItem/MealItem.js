import { DUMMY_MEALS } from "../dummy-meals";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const mealItem = DUMMY_MEALS.map((meal) => (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} meal={meal}/>
      </div>
    </li>
  ));

  return <>{mealItem}</>;
};

export default MealItem;
