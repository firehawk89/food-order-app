import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={styles["input-box"]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
