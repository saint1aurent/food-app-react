import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfContextItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  console.log("header", cartCtx);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfContextItems}</span>
    </button>
  );
};

export default HeaderCartButton;
