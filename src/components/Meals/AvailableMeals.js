import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
            <MealItem />
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
