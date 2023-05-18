import React from "react";
import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}

export default Loading;
