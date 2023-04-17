import React from "react";
import Pagination from "react-js-pagination";
import styles from "./paginationBtn.module.css";

function PaginationBtn({ page, limit, totalNum, onPageChange }) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={limit}
      totalItemsCount={totalNum}
      pageRangeDisplayed={5}
      prevPageText="‹"
      nextPageText="›"
      onChange={onPageChange}
      innerClass={styles.pagination}
      activeClass={styles.active}
    />
  );
}

export default PaginationBtn;
