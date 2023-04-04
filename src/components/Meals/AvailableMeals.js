import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.scss";
import useHttpRequest from "../../hooks/use-http-request";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttpRequest();

  useEffect(() => {
    const updateMeals = (mealObj) => {
      const loadedMeals = [];

      for (const mealKey in mealObj) {
        loadedMeals.push({
          id: mealKey,
          name: mealObj[mealKey].name,
          description: mealObj[mealKey].description,
          price: mealObj[mealKey].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://food-order-app-80fd0-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      updateMeals
    );
  }, [fetchMeals]);

  let mealsList = (
    <p className={styles["meals__list-fallback"]}>Found no meals</p>
  );

  if (meals.length > 0) {
    mealsList = (
      <ul className={styles["meals__list"]}>
        {meals.map((meal) => {
          return (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </ul>
    );
  }

  let content = mealsList;

  if (isLoading) {
    content = <p className={styles["meals__list-fallback"]}>Loading...</p>;
  }

  if (error) {
    content = <p className={styles["meals__list-fallback"]}>{error}</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
