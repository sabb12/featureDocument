RichEditor
import "../../styles/richEditor.scss";
import { SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faSuperscript,
  faSubscript,
  faListOl,
  faList,
  faRotateLeft,
  faRotateRight,
  faLink,
  faUnlink,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faIndent,
  faOutdent,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
interface ActiveButtons {
  [key: string]: boolean;
}
export default function RichEditor() {
  const [isActiveButton, setIsActiveButton] = useState<ActiveButtons>({});
  const [richTextContent, setRichTextContent] = useState("");

  const isactiveButtonHanleClick = (buttonID: string) => {
    setIsActiveButton((prev) => ({
      ...prev,
      [buttonID]: !prev[buttonID],
    }));
  };

  const textCnotentHandler = (e: React.FormEvent<HTMLDivElement>) => {
    setRichTextContent(richTextContent);
  };

  const applyBold = (value: string) => {
    document.execCommand(value);
    setRichTextContent(document.getElementById("text-input")!.innerHTML);
    isactiveButtonHanleClick(value);
  };

  return (
    <article className="closed_container4">
      <h1 className="subTitle">내 답변</h1>
      <div className="richEditorText richEditorText_container">
        <div className="options">
          {/* Text Format */}
          <button
            id="bold"
            className="option-button format"
            style={{
              backgroundColor: isActiveButton["bold"] ? "#e0e9ff" : "white",
            }}
            onClick={() => applyBold("bold")}
          >
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button
            id="italic"
            className="option-button format"
            style={{
              backgroundColor: isActiveButton["italic"] ? "#e0e9ff" : "white",
            }}
            onClick={() => isactiveButtonHanleClick("italic")}
          >
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button
            id="underline"
            className="option-button format"
            style={{
              backgroundColor: isActiveButton["underline"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("underline")}
          >
            <FontAwesomeIcon icon={faUnderline} />
          </button>
          <button
            id="strikethrough"
            className="option-button format"
            style={{
              backgroundColor: isActiveButton["strikethrough"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("strikethrough")}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </button>
          <button
            id="superscript"
            className="option-button script"
            style={{
              backgroundColor: isActiveButton["superscript"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("superscript")}
          >
            <FontAwesomeIcon icon={faSuperscript} />
          </button>
          <button
            id="subscript"
            className="option-button script"
            style={{
              backgroundColor: isActiveButton["subscript"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("subscript")}
          >
            <FontAwesomeIcon icon={faSubscript} />
          </button>
          {/* List */}
          <button id="insertOrderedList" className="option-button">
            <FontAwesomeIcon icon={faListOl} />
          </button>
          <button id="insertUnorderedList" className="option-button">
            <FontAwesomeIcon icon={faList} />
          </button>

          {/* undo/redo */}
          <button id="undo" className="option-button">
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button id="redo" className="option-button">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          {/* Link */}
          <button id="createLink" className="adv-option-button">
            <FontAwesomeIcon icon={faLink} />
          </button>
          <button id="unlink" className="option-button">
            <FontAwesomeIcon icon={faUnlink} />
          </button>

          {/* Alignment */}
          <button
            id="justifyLeft"
            className="option-button align"
            style={{
              backgroundColor: isActiveButton["justifyLeft"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("justifyLeft")}
          >
            <FontAwesomeIcon icon={faAlignLeft} />
          </button>
          <button
            id="justifyCenter"
            className="option-button align"
            style={{
              backgroundColor: isActiveButton["justifyCenter"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("justifyCenter")}
          >
            <FontAwesomeIcon icon={faAlignCenter} />
          </button>
          <button
            id="justifyRight"
            className="option-button align"
            style={{
              backgroundColor: isActiveButton["justifyRight"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("justifyRight")}
          >
            <FontAwesomeIcon icon={faAlignRight} />
          </button>
          <button
            id="justifyFull"
            className="option-button align"
            style={{
              backgroundColor: isActiveButton["justifyFull"]
                ? "#e0e9ff"
                : "white",
            }}
            onClick={() => isactiveButtonHanleClick("justifyFull")}
          >
            <FontAwesomeIcon icon={faAlignJustify} />
          </button>
          <button
            id="indent"
            className="option-button spacing"
            style={{
              backgroundColor: isActiveButton["indent"] ? "#e0e9ff" : "white",
            }}
            onClick={() => isactiveButtonHanleClick("indent")}
          >
            <FontAwesomeIcon icon={faIndent} />
            <i className="fa-solid fa-indent"></i>
          </button>
          <button
            id="outdent"
            className="option-button spacing"
            style={{
              backgroundColor: isActiveButton["outdent"] ? "#e0e9ff" : "white",
            }}
            onClick={() => isactiveButtonHanleClick("outdent")}
          >
            <FontAwesomeIcon icon={faOutdent} />
            <i className="fa-solid fa-outdent"></i>
          </button>
          {/* Headings */}
          <select id="formatblock" className="adv-option-button">
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="H5">H5</option>
            <option value="H6">H6</option>
          </select>
          {/* Font */}
          <select id="fontName" className="adv-option-button"></select>
          <select id="fontSize" className="adv-option-button"></select>

          {/* Color */}
          <div className="input-wrapper">
            <input type="color" id="foreColor" className="adv-option-button" />
            <label htmlFor="foreColor">Font Color</label>
          </div>
          <div className="input-wrapper">
            <input type="color" id="backColor" className="adv-option-button" />
            <label htmlFor="backColor">Highlight Color</label>
          </div>

          {/* image */}
          <button id="insertImage" className="option-button">
            <FontAwesomeIcon icon={faImage} />
            <i className="fa-solid fa-image"></i>
          </button>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            multiple
            style={{ display: "none" }}
          />
        </div>
        <div
          id="text-input"
          contentEditable={true}
          onInput={textCnotentHandler}
          dangerouslySetInnerHTML={{ __html: richTextContent }}
        ></div>
      </div>
      <div className="closedBtn_container">
        <button className="closedBtn">답변 하기</button>
      </div>
      <div className="question">{richTextContent}</div>
    </article>
  );
}


// import "../../styles/richEditor.scss";
// import { SyntheticEvent, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBold,
//   faItalic,
//   faUnderline,
//   faStrikethrough,
//   faSuperscript,
//   faSubscript,
//   faListOl,
//   faList,
//   faRotateLeft,
//   faRotateRight,
//   faLink,
//   faUnlink,
//   faAlignLeft,
//   faAlignCenter,
//   faAlignRight,
//   faAlignJustify,
//   faIndent,
//   faOutdent,
//   faImage,
// } from "@fortawesome/free-solid-svg-icons";
// interface ActiveButtons {
//   [key: string]: boolean;
// }
// export default function RichEditor() {
//   const [isActiveButton, setIsActiveButton] = useState<ActiveButtons>({});
//   const [richTextContent, setRichTextContent] = useState("");

//   const isactiveButtonHanleClick = (buttonID: string) => {
//     setIsActiveButton((prev) => ({
//       ...prev,
//       [buttonID]: !prev[buttonID],
//     }));
//   };

//   const textCnotentHandler = (e: React.FormEvent<HTMLDivElement>) => {
//     setRichTextContent(richTextContent);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     console.log("e.key:", e.key);
//     if (e.key === "Enter") {
//       const inputValue: string = e.currentTarget.textContent || "";
//       if (inputValue.endsWith("/code")) {
//         setRichTextContent(inputValue);
//       }
//     }
//   };

//   return (
//     <article className="closed_container4">
//       <h1 className="subTitle">내 답변</h1>
//       <div className="richEditorText richEditorText_container">
//         <div className="options">
//           {/* Text Format */}
//           <button
//             id="bold"
//             className="option-button format"
//             style={{
//               backgroundColor: isActiveButton["bold"] ? "#e0e9ff" : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("bold")}
//           >
//             <FontAwesomeIcon icon={faBold} />
//           </button>
//           <button
//             id="italic"
//             className="option-button format"
//             style={{
//               backgroundColor: isActiveButton["italic"] ? "#e0e9ff" : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("italic")}
//           >
//             <FontAwesomeIcon icon={faItalic} />
//           </button>
//           <button
//             id="underline"
//             className="option-button format"
//             style={{
//               backgroundColor: isActiveButton["underline"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("underline")}
//           >
//             <FontAwesomeIcon icon={faUnderline} />
//           </button>
//           <button
//             id="strikethrough"
//             className="option-button format"
//             style={{
//               backgroundColor: isActiveButton["strikethrough"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("strikethrough")}
//           >
//             <FontAwesomeIcon icon={faStrikethrough} />
//           </button>
//           <button
//             id="superscript"
//             className="option-button script"
//             style={{
//               backgroundColor: isActiveButton["superscript"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("superscript")}
//           >
//             <FontAwesomeIcon icon={faSuperscript} />
//           </button>
//           <button
//             id="subscript"
//             className="option-button script"
//             style={{
//               backgroundColor: isActiveButton["subscript"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("subscript")}
//           >
//             <FontAwesomeIcon icon={faSubscript} />
//           </button>
//           {/* List */}
//           <button id="insertOrderedList" className="option-button">
//             <FontAwesomeIcon icon={faListOl} />
//           </button>
//           <button id="insertUnorderedList" className="option-button">
//             <FontAwesomeIcon icon={faList} />
//           </button>

//           {/* undo/redo */}
//           <button id="undo" className="option-button">
//             <FontAwesomeIcon icon={faRotateLeft} />
//           </button>
//           <button id="redo" className="option-button">
//             <FontAwesomeIcon icon={faRotateRight} />
//           </button>
//           {/* Link */}
//           <button id="createLink" className="adv-option-button">
//             <FontAwesomeIcon icon={faLink} />
//           </button>
//           <button id="unlink" className="option-button">
//             <FontAwesomeIcon icon={faUnlink} />
//           </button>

//           {/* Alignment */}
//           <button
//             id="justifyLeft"
//             className="option-button align"
//             style={{
//               backgroundColor: isActiveButton["justifyLeft"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("justifyLeft")}
//           >
//             <FontAwesomeIcon icon={faAlignLeft} />
//           </button>
//           <button
//             id="justifyCenter"
//             className="option-button align"
//             style={{
//               backgroundColor: isActiveButton["justifyCenter"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("justifyCenter")}
//           >
//             <FontAwesomeIcon icon={faAlignCenter} />
//           </button>
//           <button
//             id="justifyRight"
//             className="option-button align"
//             style={{
//               backgroundColor: isActiveButton["justifyRight"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("justifyRight")}
//           >
//             <FontAwesomeIcon icon={faAlignRight} />
//           </button>
//           <button
//             id="justifyFull"
//             className="option-button align"
//             style={{
//               backgroundColor: isActiveButton["justifyFull"]
//                 ? "#e0e9ff"
//                 : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("justifyFull")}
//           >
//             <FontAwesomeIcon icon={faAlignJustify} />
//           </button>
//           <button
//             id="indent"
//             className="option-button spacing"
//             style={{
//               backgroundColor: isActiveButton["indent"] ? "#e0e9ff" : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("indent")}
//           >
//             <FontAwesomeIcon icon={faIndent} />
//             <i className="fa-solid fa-indent"></i>
//           </button>
//           <button
//             id="outdent"
//             className="option-button spacing"
//             style={{
//               backgroundColor: isActiveButton["outdent"] ? "#e0e9ff" : "white",
//             }}
//             onClick={() => isactiveButtonHanleClick("outdent")}
//           >
//             <FontAwesomeIcon icon={faOutdent} />
//             <i className="fa-solid fa-outdent"></i>
//           </button>
//           {/* Headings */}
//           <select id="formatblock" className="adv-option-button">
//             <option value="H1">H1</option>
//             <option value="H2">H2</option>
//             <option value="H3">H3</option>
//             <option value="H4">H4</option>
//             <option value="H5">H5</option>
//             <option value="H6">H6</option>
//           </select>
//           {/* Font */}
//           <select id="fontName" className="adv-option-button"></select>
//           <select id="fontSize" className="adv-option-button"></select>

//           {/* Color */}
//           <div className="input-wrapper">
//             <input type="color" id="foreColor" className="adv-option-button" />
//             <label htmlFor="foreColor">Font Color</label>
//           </div>
//           <div className="input-wrapper">
//             <input type="color" id="backColor" className="adv-option-button" />
//             <label htmlFor="backColor">Highlight Color</label>
//           </div>

//           {/* image */}
//           <button id="insertImage" className="option-button">
//             <FontAwesomeIcon icon={faImage} />
//             <i className="fa-solid fa-image"></i>
//           </button>
//           <input
//             type="file"
//             id="imageInput"
//             accept="image/*"
//             multiple
//             style={{ display: "none" }}
//           />
//         </div>
//         <div
//           id="text-input"
//           contentEditable={true}
//           onInput={textCnotentHandler}
//           onKeyDown={handleKeyDown}
//           dangerouslySetInnerHTML={{ __html:    }}
//         ></div>
//       </div>
//       <div className="closedBtn_container">
//         <button className="closedBtn">답변 하기</button>
//       </div>
//     </article>
//   );
// }
// const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     console.log("e.key:", e.key);
//     if (e.key === "Enter") {
//       const inputValue: string = e.currentTarget.textContent || "";
//       if (inputValue.endsWith("/code")) {
//         setRichTextContent(inputValue);
//       }
//     }
//   };