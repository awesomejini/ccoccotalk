/* eslint-disable */

import React from "react";
import "./SearchFriend.css";
import friendsData from "../friendsData";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const SearchFriend = (props) => {
  let history = useHistory();
  let [inputValue, setInputValue] = useState();
  const [friendDetail, setFriendDetail] = useState(props.setFriendDetail);
  const [params, setParams] = useState({});

  const onChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onSearch = (e) => {
    let result = [];
    let inputValue = e;
    for (let i = 0; i < friendsData.length; i++) {
      if (friendsData[i].name.includes(inputValue)) {
        result.push(
          <li
            className="result-list li-col"
            key={i}
            onClick={(e) => {
              e.preventDefault();
              setParams(friendsData[i]);
              setFriendDetail(true);
            }}
          >
            <a
              href="/friends"
              className="thumb-img-s-normal"
              style={{
                background: `white url(${friendsData[i].profileImage}) no-repeat top 4px center/70%`,
              }}
            ></a>
            <div className="text">
              <h4>{friendsData[i].name}</h4>
              <p>{friendsData[i].stateMsg}</p>
            </div>
          </li>
        );
      }
    }
    return result;
  };

  const FriendDetail = () => {
    return (
      <>
        <div className="friendDetail">
          <button
            onClick={(e) => {
              e.preventDefault();
              setFriendDetail(!friendDetail);
            }}
          ></button>
          <div className="bgImg">이미지 로딩될것임</div>
          <div
            className="profileImage"
            style={{ backgroundImage: "url(" + params.profileImage + ")" }}
          ></div>
          <p>{params.name}</p>
          <p>{params.stateMsg}</p>
          <hr />
          <ul className="connect-wrap">
            <li>
              <a href={`/chatroom/${params.id}`}>
                <img src="https://image.flaticon.com/icons/png/512/2462/2462719.png" />
              </a>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/png/512/159/159832.png" />
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/png/512/591/591410.png" />
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      {friendDetail ? (
        <FriendDetail />
      ) : (
        <div className="searchModal">
          <ul className="ul-row">
            <li
              onClick={(e) => {
                e.preventDefault();
                history.push("/");
              }}
              className="prevBtn"
            >
              <i className="fas fa-chevron-left"></i>
            </li>
            <li className="search-wrap">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  value={inputValue}
                  onChange={onChange}
                />
              </form>
            </li>
          </ul>
          <div className="search-result">
            <ul>{onSearch(inputValue)}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFriend;
