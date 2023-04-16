import React from "react";
import styles from "./button.module.css";

function Button({ label, icon, link }) {
  return (
    <button className={styles.button}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon && <img src={icon} alt={label} className={styles.icon} />}
        {label}
      </a>
    </button>
  );
}

export default Button;
