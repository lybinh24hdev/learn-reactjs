import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  // useEffect(() => {
  //   DUMMY_MEALS.map((item) => {
  //     return fetch("https://foods-24hdev-default-rtdb.firebaseio.com/menu.json", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type':'application/json'
  //       },
  //       body: JSON.stringify(item)
  //     });
  //   });
  // }, []);

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    let loadedMeals = [];
    const fetchMeals = async () => {
      setIsLoading(true);
      const respone = await fetch(
        "https://foods-24hdev-default-rtdb.firebaseio.com/menu.json"
      );
      if (!respone.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await respone.json();
      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Your meal is coming...</p>}
        {httpError && <p className={classes['http-error']}>{httpError}</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
