import React from "react";
import styles from "./button.module.css";

function Button({ type = "button", label, color = "blue", onClick }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
