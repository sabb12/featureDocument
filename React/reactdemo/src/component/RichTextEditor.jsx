import React, { useState, useRef, useEffect, SyntheticEvent } from "react";

export default function QuestionCreateAndModifyPage() {
  const [textAreaInputValue, setTextAreaInputValue] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const [tagInptValue, setTagInputValue] = useState("");
  const [tagOutputvalue, setTagOutputValue] = useState([]);
  const textAreaRef = useRef(null);
  const [applicationContent, setApplicationContent] = useState("");

  useEffect(() => {
    const formatTextToHTML = (text) => {
      const regex = /`([^`]*)`/g;
      const parts = [];
      let lastIndex = 0;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = regex.lastIndex;
        const before = text.slice(lastIndex, start);
        const code = match[1];
        if (before) {
          parts.push(before.replace(/\n/g, "<br>"));
        }
        parts.push(
          `<span style="background-color: lightgray; font-family: monospace; white-space: pre-wrap; display: inline-block;">${code.replace(
            /\n/g,
            "<br>"
          )}</span>`
        );
        lastIndex = end;
      }
      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex).replace(/\n/g, "<br>"));
      }
      return parts.join("");
    };
    setFormattedText(formatTextToHTML(textAreaInputValue));
  }, [textAreaInputValue]);

  const wrapTextInBackticks = () => {
    const textarea = textAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textAreaInputValue.slice(start, end);
    const before = textAreaInputValue.slice(0, start);
    const after = textAreaInputValue.slice(end);

    // Wrap the selected text with backticks
    const newText = `${before}\`${selectedText}\`${after}`;
    setTextAreaInputValue(newText);
  };

  return (
    <section className="application_wrapper">
      {/* <h1 className="headerTitle">{questionId ? "질문 수정" : "질문 작성"}</h1> */}
      <article className="application_container1">
        <div className="attempt_container">
          <h1 className="subTitle">무엇을 시도하셨고 무엇을 기대하셨습니까?</h1>
          <h6 className="descriptionTitle">
            무엇을 시도했는지. 무엇이 일어날 것이라고 예상했는지. 그리고 실제로
            어떤 결과가 나타났는지 설명하세요.(단 최소 20자)
          </h6>
          <div className="richEditorText_container">
            <button onClick={wrapTextInBackticks}>{"</>"}</button>
            <div>
              <textarea
                ref={textAreaRef}
                value={textAreaInputValue}
                onChange={(e) => setTextAreaInputValue(e.target.value)}
                style={{ width: "100%", height: "200px" }}
              />
              <div
                className="here"
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
