import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartBtn.module.scss";

const HeaderCartBtn = (props) => {
  const [buttonIsBumped, setButtonIsBumped] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  const buttonStyles = `${styles.button} ${buttonIsBumped ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsBumped(true);

    const timer = setTimeout(() => {
      setButtonIsBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
