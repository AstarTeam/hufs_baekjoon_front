import React from "react";
import styles from "./button.module.css";
import { useAuthContext } from "../../../context/authContext";
import { useQueryClient } from "@tanstack/react-query";

function Button({
  label,
  type = "button",
  onClick,
  color = "blue",
  state,
  problemNum,
}) {
  const { userData } = useAuthContext();
  const client = useQueryClient();

  const handleButtonToggle = async () => {
    const message = await onClick(problemNum, userData.access_token, state);
    if (message) {
      client.invalidateQueries(["problems"]);
    }
  };
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      type={type}
      onClick={handleButtonToggle}
      disabled={userData?.user_auth !== 1}
    >
      {label}
    </button>
  );
}

export default Button;
