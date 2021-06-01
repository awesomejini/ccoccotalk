import React from "react";
import "./Chats.css";
import Nav from "../Components/Nav";

function Chats(props) {
  return (
    <>
      <div className="ad-wrap">
        <div className="ad">
          <a href="https://awesomejini.tistory.com/">
            <b>awesomejini 블로그</b>로 놀러오세요~!
          </a>
        </div>
      </div>
      <Nav navMenu={props.navMenu} nav={props.nav} />
      <div className="chats-top-wrap">
        <ul className="ul-row">
          <li className="li-row">chats</li>
          <li className="li-row">
            <a href="/" className="searchBtn fas fa-search">
              {" "}
            </a>
          </li>
          <li className="li-row">
            <a href="/" className="searchBtn fas fa-user-plus">
              {" "}
            </a>
          </li>
          <li className="li-row">
            <a href="/" className="searchBtn fas fa-music">
              {" "}
            </a>
          </li>
          <li className="li-row">
            <a href="/" className="searchBtn fas fa-cog">
              {" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="friends-list-wrap">
        <ul className="ul-col">
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친1</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친2</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친3</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친4</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친5</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친6</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친7</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친7</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
          <li className="li-col">
            <a href="/" className="thumb-img-s-my">
              {" "}
            </a>
            <div className="text">
              <h4>짱친짱친7</h4>
              <p>오늘도 화이팅</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Chats;
