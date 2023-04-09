import React from "react";
import styles from "./button.module.css";

function Button({ label, type = "button", onClick, color = "blue" }) {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
