/* eslint-disable */

import React, { useState } from "react";
import "./Friends.css";
import Nav from "../Components/Nav";
import Chatroom from "../Components/Chatroom";
import SearchFriend from "../Components/SearchFriend";

function Friends(props) {
  const [birthModal, setBirthModal] = useState(true);
  const [favModal, setFavModal] = useState(true);
  const [recommModal, setRecommModal] = useState(true);
  const [channModal, setChannModal] = useState(true);
  const [friendsModal, setFriendsModal] = useState(true);
  const [friendDetail, setFriendDetail] = useState(props.setFriendDetail);
  const [params, setParams] = useState({});
  const [onSearchModal, setOnSearchModal] = useState(false);

  const arrow = (modal, boolean) => {
    if (boolean) {
      return (
        <a
          href="/"
          className="toggle-arrow-s"
          onClick={(e) => {
            e.preventDefault();
            modal(false);
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      );
    } else {
      return (
        <a
          href="/"
          className="toggle-arrow-s"
          onClick={(e) => {
            e.preventDefault();
            modal(true);
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      );
    }
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
              {/* <a href={`/chatroom/${params.id}`}> */}
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
        <>
          <div className="ad-wrap">
            <div className="ad">
              <a href="https://awesomejini.tistory.com/">
                <b>awesomejini 블로그</b>로 놀러오세요~!
              </a>
            </div>
          </div>
          <Nav navMenu={props.navMenu} nav={props.nav} />
          <div className="friends-top-wrap">
            <ul className="ul-row">
              <li className="li-row">Friends</li>
              <li className="li-row">
                <a href="/search" className="searchBtn fas fa-search"></a>
              </li>
              <li className="li-row">
                <a href="/" className="searchBtn fas fa-user-plus"></a>
              </li>
              <li className="li-row">
                <a href="/" className="searchBtn fas fa-music"></a>
              </li>
              <li className="li-row">
                <a href="/" className="searchBtn fas fa-cog"></a>
              </li>
            </ul>
          </div>
          <div className="friends-list-wrap">
            <ul className="ul-col">
              <li className="li-col">
                <a href="/" className="thumb-img-s-my"></a>
                <div className="text">
                  <h4>어썸지니</h4>
                  <p>겅부쟁이~</p>
                </div>
              </li>

              {/* 생일 */}
              <ul>
                <h6>Friends with Birthdays</h6>

                {birthModal === true
                  ? arrow(setBirthModal, true)
                  : arrow(setBirthModal, false)}

                {birthModal === true
                  ? props.friendsData.map((friend) => {
                      if (friend.birthDay === true) {
                        return (
                          <li
                            className="li-col"
                            key={friend.id}
                            onClick={(e) => {
                              e.preventDefault();
                              setParams(friend);
                              FriendDetail(e);
                              setFriendDetail(true);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="update-img-dot">.</div>
                            <a
                              href="/"
                              className="thumb-img-s-normal"
                              style={{
                                background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`,
                              }}
                            ></a>
                            <div className="text">
                              <h4>{friend.name} 🎂</h4>
                              <p>{friend.stateMsg}</p>
                            </div>
                            <a href="/" className="gift-shop round-btn-s">
                              Gift Shop <i className="fas fa-gift red"></i>
                            </a>
                          </li>
                        );
                      }
                    })
                  : null}
                <li className="li-col">
                  <a href="/" className="thumb-img-s-birth"></a>
                  <div className="text">
                    <h4>View more birthdays</h4>
                  </div>
                  <a href="/" className="go-arrow-s">
                    100 <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>

              {/* 즐겨찾기 */}
              <ul>
                <h6>Favorites</h6>
                {favModal === true
                  ? arrow(setFavModal, true)
                  : arrow(setFavModal, false)}
                {favModal === true
                  ? props.friendsData.map((friend) => {
                      if (friend.fav === true) {
                        if (friend.music === false) {
                          return (
                            <li
                              className="li-col"
                              key={friend.id}
                              onClick={(e) => {
                                e.preventDefault();
                                setParams(friend);
                                FriendDetail(e);
                                setFriendDetail(true);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                href="/"
                                className="thumb-img-s-normal"
                                style={{
                                  background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`,
                                }}
                              >
                                {" "}
                              </a>
                              <div className="text">
                                <h4>{friend.name}</h4>
                                <p>{friend.stateMsg}</p>
                              </div>
                            </li>
                          );
                        } else {
                          return (
                            <li
                              className="li-col"
                              key={friend.id}
                              onClick={(e) => {
                                e.preventDefault();
                                setParams(friend);
                                FriendDetail(e);
                                setFriendDetail(true);
                              }}
                            >
                              <a
                                href="/"
                                className="thumb-img-s-normal"
                                style={{
                                  background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`,
                                }}
                              >
                                {" "}
                              </a>
                              <div className="text">
                                <h4>{friend.name}</h4>
                                <p>{friend.stateMsg}</p>
                              </div>
                              <a href="/" className="music-play round-btn-s">
                                {friend.musicTitle}{" "}
                                <i className="fas fa-play green"></i>
                              </a>
                            </li>
                          );
                        }
                      }
                    })
                  : null}
              </ul>

              {/* 추천친구 */}
              <ul>
                <h6>Recommended Friends</h6>
                {recommModal === true
                  ? arrow(setRecommModal, true)
                  : arrow(setRecommModal, false)}

                {recommModal === true ? (
                  <li className="li-col">
                    <a href="/" className="thumb-img-s-recomm">
                      {" "}
                    </a>
                    <div className="text">
                      <h4>Discover more people</h4>
                    </div>
                    <a href="/" className="go-arrow-s">
                      100 <i className="fas fa-chevron-right"></i>
                    </a>
                  </li>
                ) : null}
              </ul>

              {/* 채널 */}
              <ul>
                <h6>Channel</h6>
                {channModal === true
                  ? arrow(setChannModal, true)
                  : arrow(setChannModal, false)}

                {channModal === true ? (
                  <li className="li-col">
                    <a href="/" className="thumb-img-s-channel">
                      {" "}
                    </a>
                    <div className="text">
                      <h4>Channel</h4>
                    </div>
                    <a href="/" className="go-arrow-s">
                      100 <i className="fas fa-chevron-right"></i>
                    </a>
                  </li>
                ) : null}
                {channModal === true
                  ? props.channelData.map((channel) => {
                      return (
                        <li className="li-col" key={channel.id}>
                          <a
                            href="/"
                            className="thumb-img-s-channel"
                            style={{
                              background: `white url(${channel.profileImage}) no-repeat top center/100%`,
                            }}
                          >
                            {" "}
                          </a>
                          <div className="text">
                            <h4>{channel.name}</h4>
                            <p>{channel.stateMsg}</p>
                          </div>
                        </li>
                      );
                    })
                  : null}
              </ul>

              {/* 친구목록 */}
              <ul>
                <h6>Friends 100</h6>
                {friendsModal === true
                  ? arrow(setFriendsModal, true)
                  : arrow(setFriendsModal, false)}

                {friendsModal === true
                  ? props.friendsData.map((friend) => {
                      return (
                        <li
                          className="li-col"
                          key={friend.id}
                          onClick={(e) => {
                            e.preventDefault();
                            setParams(friend);
                            FriendDetail(e);
                            setFriendDetail(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            href="/"
                            className="thumb-img-s-normal"
                            style={{
                              background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`,
                            }}
                          >
                            {" "}
                          </a>
                          <div className="text">
                            <h4>{friend.name}</h4>
                            <p>{friend.stateMsg}</p>
                          </div>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Friends;
