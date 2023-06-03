import React, { useState } from "react";
import searchIcon from "../../../assets/icons/search.svg";
import styles from "./searchInput.module.css";

function SearchInput({ onSubmit, inputRef }) {
  const [serchNum, setSearchNum] = useState();

  const handleChange = e => setSearchNum(e.target.value);
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="number"
        placeholder="문제 번호 검색..."
        className={styles.input}
        ref={inputRef}
        onChange={handleChange}
        defaultValue={serchNum}
      />
      <button>
        <img src={searchIcon} alt="찾기 버튼" className={styles.button} />
      </button>
    </form>
  );
}

export default SearchInput;
