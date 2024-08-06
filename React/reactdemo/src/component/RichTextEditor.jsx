import React, { useEffect, useRef, useState } from "react";
import "../style/RichTextEditor.css";

export default function RichTextEditor() {
  const textFieldRef = useRef(null);
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
      // Toggle a code block
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const selectedText = range.toString();

          // Check if the selected text is already in a code block
          const parentElement = range.commonAncestorContainer.parentElement;
          if (parentElement && parentElement.tagName === "CODE") {
            // If it's already a code block, unwrap it
            parentElement.outerHTML = parentElement.innerHTML;
          } else {
            // Otherwise, wrap it in a <code> block
            const codeElement = document.createElement("code");
            codeElement.style.backgroundColor = "lightgray";
            codeElement.style.fontFamily = "monospace";
            codeElement.style.whiteSpace = "pre-wrap";
            codeElement.style.display = "inline-block";

            codeElement.textContent = selectedText;

            range.deleteContents();
            range.insertNode(codeElement);
          }
        }
      }
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
      <div ref={textFieldRef} className="editor" contentEditable={true} />
    </div>
  );
}
