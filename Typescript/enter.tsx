import React, { useState, ChangeEvent, KeyboardEvent } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (inputValue.trim().length > 0) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="inputValue"
      />
      <button onClick={addItem} className="btn">
        제출
      </button>
      <div className="container">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
