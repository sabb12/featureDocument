import React, { useEffect, useRef, useState } from "react";
import "../style/RichTextEditor.css";

export default function RichTextEditor() {
  const textFieldRef = useRef(null);
  const [spellCheck, setSpellCheck] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Set initial design mode for the contenteditable div
    if (textFieldRef.current) {
      textFieldRef.current.contentEditable = true;
    }
  }, []);

  const handleButtonClick = (cmd) => {
    const textField = textFieldRef.current;

    if (cmd === "insertImage" || cmd === "createLink") {
      let url = prompt("Enter link here:", "");
      document.execCommand(cmd, false, url);
      if (cmd === "insertImage") {
        const imgs = textField.querySelectorAll("img");
        imgs.forEach((item) => {
          item.style.maxWidth = "200px";
        });
      } else {
        const links = textField.querySelectorAll("a");
        links.forEach((item) => {
          item.target = "_blank";
          item.addEventListener("mouseover", () => {
            document.execCommand("designMode", false, "off");
          });
          item.addEventListener("mouseout", () => {
            document.execCommand("designMode", false, "on");
          });
        });
      }
    } else if (cmd === "showCode") {
      const codeHtml = `<span style="background-color: lightgray; font-family: monospace; white-space: pre-wrap; display: inline-block;">${spellCheck}</span>`;
      if (textFieldRef.current) {
        textFieldRef.current.innerHTML += codeHtml;
      }
      setShow(!show);
    } else {
      document.execCommand(cmd, false, null);
    }
  };

  return (
    <div>
      <form>
        <button type="button" onClick={() => handleButtonClick("justifyLeft")}>
          Left
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("justifyCenter")}
        >
          Center
        </button>
        <button type="button" onClick={() => handleButtonClick("justifyFull")}>
          Justify
        </button>
        <button type="button" onClick={() => handleButtonClick("justifyRight")}>
          Right
        </button>
        <button type="button" onClick={() => handleButtonClick("bold")}>
          Bold
        </button>
        <button type="button" onClick={() => handleButtonClick("italic")}>
          Italic
        </button>
        <button type="button" onClick={() => handleButtonClick("underline")}>
          Underline
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("insertUnorderedList")}
        >
          ul
        </button>
        <button type="button" onClick={() => handleButtonClick("insertImage")}>
          Image
        </button>
        <button type="button" onClick={() => handleButtonClick("createLink")}>
          Link
        </button>
        <button type="button" onClick={() => handleButtonClick("showCode")}>
          Code
        </button>
      </form>
      <div
        ref={textFieldRef}
        className="editor"
        contentEditable={true}
        spellCheck={spellCheck}
      />
    </div>
  );
}
