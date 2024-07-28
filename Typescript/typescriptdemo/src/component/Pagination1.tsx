import React, { useState } from "react";

export default function Pagination1() {
  const numberList = Array.from(Array(20), (_, index) => index + 1);
  const [currentPage, setCurrentPage] = useState<number>(10);
  const maxPerPage = 9;

  const getRenderedPaginationList = (): number[] => {
    if (currentPage <= Math.floor(maxPerPage / 2)) {
      return numberList.slice(0, maxPerPage);
    }
    if (currentPage > numberList.length - Math.floor(maxPerPage / 2)) {
      return numberList.slice(
        numberList.length - maxPerPage,
        numberList.length
      );
    }
    const firstShownIndex = currentPage - 1 - Math.floor(maxPerPage / 2);
    return numberList.slice(firstShownIndex, firstShownIndex + maxPerPage);
  };

  const handleCurrentPage = (currentIndex: number) => {
    setCurrentPage(currentIndex);
  };

  const handlePageChange = (direction: string) => {
    if (direction === "first") {
      setCurrentPage(1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < numberList.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "last") {
      setCurrentPage(numberList.length);
    }
  };

  const renderedPaginationList = getRenderedPaginationList();

  return (
    <div className="container">
      <div className="content">CONTENT</div>
      <div className="pagination">
        {currentPage > Math.ceil(maxPerPage / 2) && (
          <>
            <button
              type="button"
              className="nav_button"
              onClick={() => handlePageChange("first")}
            >
              First
            </button>
            <button
              type="button"
              className="nav_button"
              onClick={() => handlePageChange("prev")}
            >
              &laquo; Prev
            </button>
          </>
        )}

        {renderedPaginationList.map((item) => (
          <button
            type="button"
            key={item}
            className="button_page"
            aria-current={currentPage === item ? "true" : "false"}
            onClick={() => handleCurrentPage(item)}
          >
            {item}
          </button>
        ))}

        {currentPage < numberList.length - Math.floor(maxPerPage / 2) && (
          <>
            <button
              type="button"
              className="nav_button"
              onClick={() => handlePageChange("next")}
            >
              Next &raquo;
            </button>
            <button
              type="button"
              className="nav_button"
              onClick={() => handlePageChange("last")}
            >
              Last
            </button>
          </>
        )}
      </div>
    </div>
  );
}
