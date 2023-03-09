import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <span className={styles.price}>{price}</span>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealsItem;
