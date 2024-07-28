import React, { useEffect, useRef, useState } from "react";
import "../style/ResponsiveWebsite.css";

export default function RichTextEditor() {
  const textFieldRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const textField = textFieldRef.current.contentWindow.document;
    textField.designMode = "On"; // Enable design mode in the iframe
  }, []);

  const handleButtonClick = (cmd) => {
    const textField = textFieldRef.current.contentWindow.document;
    if (cmd === "insertImage" || cmd === "createLink") {
      let url = prompt("Enter link here:", "");
      textField.execCommand(cmd, false, url);
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
            textField.designMode = "off";
          });
          item.addEventListener("mouseout", () => {
            textField.designMode = "on";
          });
        });
      }
    } else if (cmd === "showCode") {
      const textBody = textField.body;
      if (show) {
        textBody.innerHTML = textBody.textContent;
        setShow(false);
      } else {
        textBody.textContent = textBody.innerHTML;
        setShow(true);
      }
    } else {
      textField.execCommand(cmd, false, null);
    }
  };

  return (
    <div>
      <form>
        <button type="button" onClick={() => handleButtonClick("justifyLeft")}>
          <i className="fa fa-align-left" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("justifyCenter")}
        >
          <i className="fa fa-align-center" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("justifyFull")}>
          <i className="fa fa-align-justify" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("justifyRight")}>
          <i className="fa fa-align-right" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("bold")}>
          <i className="fa fa-bold" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("italic")}>
          <i className="fa fa-italic" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("underline")}>
          <i className="fa fa-underline" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("insertUnorderedList")}
        >
          <i className="fa fa-list-ul" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("insertImage")}>
          <i className="fa fa-file-image-o" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("createLink")}>
          <i className="fa fa-link" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={() => handleButtonClick("showCode")}>
          <i className="fa fa-code" aria-hidden="true"></i>
        </button>
      </form>
      <iframe id="output" name="textField" ref={textFieldRef}></iframe>
    </div>
  );
}
