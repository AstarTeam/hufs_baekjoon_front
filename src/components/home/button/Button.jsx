import React, { useState } from "react";
import styles from "./button.module.css";

function Button({ label, type = "button", onClick, color = "blue" }) {
  const [clicked, setClicked] = useState(color === "blue" ? true : false);

  const handleButtonToggle = () => setClicked(prev => !prev);

  return (
    <button
      className={`${styles.button} ${styles[clicked ? "blue" : "gray"]}`}
      type={type}
      onClick={handleButtonToggle}
    >
      {clicked ? "도전 중" : "아직 안품"}
    </button>
  );
}

export default Button;
