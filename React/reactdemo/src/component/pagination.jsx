const numberList = Array.from({ length: 100 }, (_, index) => index + 1);
const maxPerPage = 5;
const buttonsPerSet = 5;

const [currentPage, setCurrentPage] = useState(0);
const [currentSet, setCurrentSet] = useState(0);

const renderPageItems = () => {
  const start = currentPage * maxPerPage;
  const end = start + maxPerPage;
  return numberList.slice(start, end);
};

const renderPaginationButtons = () => {
  const start = currentSet * buttonsPerSet;
  const end = start + buttonsPerSet;
  const totalPages = Math.ceil(numberList.length / maxPerPage);
  const buttons = [];

  if (currentSet > 0) {
    buttons.push(
      <button key="prev" onClick={() => setCurrentSet(currentSet - 1)}>
        Previous
      </button>
    );
  }

  for (let i = start; i < end && i < totalPages; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "active" : ""}
      >
        {i + 1}
      </button>
    );
  }

  if (end < totalPages) {
    buttons.push(
      <button key="next" onClick={() => setCurrentSet(currentSet + 1)}>
        Next
      </button>
    );
  }

  return buttons;
};

return (
  <div>
    <div className="list">
      {renderPageItems().map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
    <div className="pagination">{renderPaginationButtons()}</div>
  </div>
);
