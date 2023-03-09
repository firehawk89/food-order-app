import { Fragment } from "react";

import HeaderCartBtn from "./HeaderCartBtn";
import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartBtn />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
