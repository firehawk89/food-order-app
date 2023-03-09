import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div
      className={
        props.className ? props.className + " " + styles.card : styles.card
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
