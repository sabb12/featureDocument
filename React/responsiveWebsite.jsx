import { useState } from "react";
import "../../styles/responsive.scss";

export default function Responsive() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="responsive_example">
      <h2 className="title">음료</h2>
      <div className="directory">{"집 > MENU >  음료"}</div>
      <div className="categorize_area">
        <strong className="title_categorize">분류보기</strong>
        {expanded && (
          <>
            <div className="tab_category">
              <button type="button" className="button_tab">
                카테고리
              </button>
              <button type="button" className="button_tab">
                테마
              </button>
            </div>
            <ul className="list_sub_tab">
              <li className="item_sub_tab">
                <label htmlFor="1"></label>
                <input type="checkbox" id="1" name="1" />
                전체 상품보기
              </li>
              <li className="item_sub_tab">
                <label htmlFor="2"></label>
                <input type="checkbox" id="2" name="2" />
                콜드브루 커피
              </li>
              <li className="item_sub_tab">
                <label htmlFor="3"></label>
                <input type="checkbox" id="3" name="3" />
                브루드 커피
              </li>
              <li className="item_sub_tab">
                <label htmlFor="4"></label>
                <input type="checkbox" id="4" name="4" />
                에스프레소
              </li>
              <li className="item_sub_tab">
                <label htmlFor="5"></label>
                <input type="checkbox" id="5" name="5" />
                프라프치노
              </li>
            </ul>
            <div className="sub_tab"></div>
          </>
        )}
        <button
          type="button"
          className="button_expand"
          onClick={() => setExpanded(!expanded)}
        >
          ^<span className="blind">{expanded ? "접기" : "펼치기"}</span>
        </button>
      </div>
      <ul className="image_area">
        <li className="image_wrap">
          <img
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/04/[9200000004544]_20240423124241716.jpg"
            alt="씨솔트 카라멜 콜드 브루"
          />
          <span className="image_text">씨솔트 카라멜 콜드 브루</span>
        </li>
        <li className="image_wrap">
          <img
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/04/[9200000004544]_20240423124241716.jpg"
            alt="씨솔트 카라멜 콜드 브루"
          />
          <span className="image_text">씨솔트 카라멜 콜드 브루</span>
        </li>
        <li className="image_wrap">
          <img
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/04/[9200000004544]_20240423124241716.jpg"
            alt="씨솔트 카라멜 콜드 브루"
          />
          <span className="image_text">씨솔트 카라멜 콜드 브루</span>
        </li>
        <li className="image_wrap">
          <img
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/04/[9200000004544]_20240423124241716.jpg"
            alt="씨솔트 카라멜 콜드 브루"
          />
          <span className="image_text">씨솔트 카라멜 콜드 브루</span>
        </li>
        <li className="image_wrap">
          <img
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/04/[9200000004544]_20240423124241716.jpg"
            alt="씨솔트 카라멜 콜드 브루"
          />
          <span className="image_text">씨솔트 카라멜 콜드 브루</span>
        </li>
      </ul>
    </div>
  );
}

// .responsive_example {
//     padding: 20px 5px;
//     .title {
//       font-size: 32px;
//       font-weight: bold;
//     }
//     .directory {
//       display: none;
//     }
//     .categorize_area {
//       position: relative;
//       padding: 10px 10px;
//       border: 1px solid black;
//       border-radius: 10px;
//       .title_categorize {
//         position: relative;
//         display: block;
//         padding-bottom: 10px;
//         // &:after {
//         //   position: absolute;
//         //   bottom: 0;
//         //   left: -10px;
//         //   right: -10px;
//         //   height: 1px;
//         //   background-color: black;
//         //   content: "";
//         // }
//       }
//       .tab_category {
//         display: flex;
//         padding-top: 10px;
//         gap: 10px;
//         border-top: 1px solid black;
//         .button_tab {
//           width: 100%;
//         }
//         // margin: 0 -10px;
//         // .button_tab + .button_tab {
//         //   margin-left: 10px;
//         // }
//         // .button_tab:not(:first-child) {
//         //   margin-left: 10px;
//         // }
//       }
//       .list_sub_tab {
//         height: 67px;
//         overflow-y: scroll;
//       }
//     }
//     .button_expand {
//       position: absolute;
//       top: 10px;
//       right: 10px;
//       border-radius: 50%;
//       background-color: transparent;
//     }
//     // 대체텍스트
//     .blind {
//       overflow: hidden;
//       position: absolute;
//       clip: rect(0 0 0 0);
//       width: 1px;
//       height: 1px;
//       margin: -1px;
//     }
//     .image_area {
//       margin: 0 -5px;
//     }
//     .image_wrap {
//       display: inline-block;
//       width: 50%;
//       padding: 5px;
//       vertical-align: top;
//       text-align: center;
//       box-sizing: border-box;
//       img {
//         width: 100%;
//       }
//       .image_text {
//         display: block;
//         overflow: hidden;
//         text-overflow: ellipsis;
//         white-space: nowrap;
//       }
//     }
//   }

//   @media screen and (min-width: 500px) {
//     .responsive_example {
//       .categorize_area {
//         .list_sub_tab {
//           overflow: auto;
//           height: auto;
//           .item_sub_tab {
//             display: inline-block;
//             margin-right: 10px;
//           }
//         }
//       }
//       .image_wrap {
//         width: 33.33%;
//       }
//     }
//   }

//   @media screen and (min-width: 800px) {
//     .responsive_example {
//       .image_area {
//         // 안쪽 고정(보통 pc 디자인)
//         //   width: 600px;
//         //   margin: 0 auto;

//         // 바깥 고정 (보통 모바일 디자인)
//         padding: 0 50px;
//       }
//       .image_wrap {
//         width: 20%;
//       }
//     }
//   }
