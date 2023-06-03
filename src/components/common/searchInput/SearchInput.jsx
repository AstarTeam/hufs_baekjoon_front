import React from "react";
import searchIcon from "../../../assets/icons/search.svg";
import styles from "./searchInput.module.css";

function SearchInput() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="문제 번호 검색..."
        className={styles.input}
      />
      <button>
        <img src={searchIcon} alt="찾기 버튼" className={styles.button} />
      </button>
    </form>
  );
}

export default SearchInput;
