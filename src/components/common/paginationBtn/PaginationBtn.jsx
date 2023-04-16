import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styles from "./paginationBtn.module.css";

function PaginationBtn() {
  const [page, setPage] = useState(1);

  const pageChangehandler = page => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText="‹"
      nextPageText="›"
      onChange={pageChangehandler}
      innerClass={styles.pagination}
      activeClass={styles.active}
    />
  );
}

export default PaginationBtn;
