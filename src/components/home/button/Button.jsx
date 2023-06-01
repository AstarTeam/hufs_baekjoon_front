import React, { useState } from "react";
import styles from "./button.module.css";
import { useAuthContext } from "../../../context/authContext";

function Button({ label, type = "button", onClick, color = "blue" }) {
  const { userData } = useAuthContext();
  const [clicked, setClicked] = useState(color === "blue" ? true : false);

  const handleButtonToggle = () => setClicked(prev => !prev);
  return (
    <button
      className={`${styles.button} ${styles[clicked ? "blue" : "gray"]}`}
      type={type}
      onClick={handleButtonToggle}
      disabled={userData?.user_auth !== 1}
    >
      {clicked ? "도전 중" : "아직 안품"}
    </button>
  );
}

export default Button;
