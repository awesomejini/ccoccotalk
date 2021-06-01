/* eslint-disable */

import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Chatroom.css";
import friendsData from "../friendsData";

function Chatroom() {
  let { id } = useParams();
  let history = useHistory();
  const [inputText, setInputText] = useState("");
  const [chatTexts, setChatTexts] = useState([]);

  return (
    <>
      <div className="chatroom-top-wrap">
        <ul className="ul-row">
          <li
            onClick={(e) => {
              e.preventDefault();
              history.goBack();
            }}
            className="prevBtn"
          >
            <i className="fas fa-chevron-left"></i>
          </li>
          <li className="chat-title li-row">{friendsData[id].name}</li>
          <li className="li-row">
            <a className="searchBtn fas fa-search"></a>
          </li>
          <li className="li-row">
            <a href="/" className="searchBtn fas fa-bars"></a>
          </li>
        </ul>
      </div>
      <div className="chatroom-content">
        <div className="chat-box">
          {chatTexts.map((text, i) => {
            return <div key={i}>{text}</div>;
          })}
        </div>
        <form action="">
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              e.preventDefault();
              setInputText(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              let copy = [...chatTexts];
              copy.push(inputText);
              setChatTexts(copy);
              setInputText("");
            }}
          >
            전송
          </button>
        </form>
      </div>
    </>
  );
}

export default Chatroom;
