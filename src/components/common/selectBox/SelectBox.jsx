import React, { useEffect, useState, useRef } from "react";
import styles from "./selectBox.module.css";

function SelectBox({ list, onSelectChange, selected }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectBoxRef = useRef();

  const openClass = isOpen ? "on" : "";

  const clickOutsideHandler = ({ target }) => {
    if (!target) return;
    if (!selectBoxRef.current.contains(target)) setIsOpen(false);
  };
  const openHandler = () => setIsOpen(prev => !prev);
  const selectHandler = item => {
    onSelectChange(item);
    openHandler();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <article className={styles.container} ref={selectBoxRef}>
      <button
        className={`${styles["select-button"]} ${styles[openClass]}`}
        onClick={openHandler}
      >
        {selected}
      </button>
      <ul className={styles.lists}>
        {list.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              className="txt-ellipsie"
              onClick={() => selectHandler(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SelectBox;
