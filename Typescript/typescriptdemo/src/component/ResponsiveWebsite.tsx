import React, { useState } from "react";
import "../style/ResponsiveWebsite.css";

export default function ResponsiveWebsite() {
  const [expanded, setExpanded] = useState<boolean>(true);

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
          <span className="image_text">씨솔트 카라멜 콜드 브루"</span>
        </li>
        <li className="image_wrap">
          <img
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/04/[9200000004544]_20240423124241716.jpg"
            alt="씨솔트 카라멜 콜드 브루"
          />
          <span className="image_text">씨솔트 카라멜 콜드 브루"</span>
        </li>
      </ul>
    </div>
  );
}
