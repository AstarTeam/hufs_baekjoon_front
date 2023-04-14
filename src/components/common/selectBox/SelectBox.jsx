import React, { useState } from "react";
import styles from "./selectBox.module.css";

function SelectBox({ list }) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => setIsOpen(prev => !prev);

  const openClass = isOpen ? "on" : "";

  return (
    <article className={styles.container}>
      <button
        className={`${styles["select-button"]} ${styles[openClass]}`}
        onClick={clickHandler}
      >
        정렬 방식
      </button>
      <ul className={styles.lists}>
        {list.map((item, index) => (
          <li key={index}>
            <button type="button" className="txt-ellipsie">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SelectBox;
