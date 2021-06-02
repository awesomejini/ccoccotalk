# ccoccotalk - X톡 다크모드

---
- 구현 내역
- ---

<img width="30%" aligh="left" src="https://user-images.githubusercontent.com/75153322/120268734-57b76900-c2e1-11eb-8355-ce1ccb00caa7.gif" /><img width="30.35%" aligh="left" src="https://user-images.githubusercontent.com/75153322/120149682-0649a400-c225-11eb-81c5-cd5fdebff33f.gif" /><img width="30.35%" aligh="left" src="https://user-images.githubusercontent.com/75153322/120291484-50eb1f00-c2fe-11eb-99ef-0c127d5c90c8.gif" />

---
- 20210601 기록
- ---

* [x] News.js 컴포넌트 추가

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120291484-50eb1f00-c2fe-11eb-99ef-0c127d5c90c8.gif" />

  성공 소스
  
  ```javascript
  import axios from "axios";
import "./News.css";

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=dcc638cc1ac6410cb8dc5176d948ede1"
        );
        setArticles(reponse.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    console.log(articles);
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Nav navMenu={props.navMenu} nav={props.nav} />
        <p className="news">News</p>
        <div className="loading-wrap">
          <p>불러오는 중입니다...</p>
        </div>
      </>
    );
  }
  if (!articles) {
    return null;
  }

  return (
    <>
      <Nav navMenu={props.navMenu} nav={props.nav} />
      <p className="news">News</p>
      <ul className="articles-wrap">
        {articles.map((a) => {
          return (
            <li key={a.url}>
              <a href={a.url}>
                <div
                  className="urlToImage"
                  style={{ background: `#fff url(${a.urlToImage})` }}
                />
                {a.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
  ```
  
* [x] SearchFriend.js 검색 모달 추가

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120268734-57b76900-c2e1-11eb-8355-ce1ccb00caa7.gif" />

  성공 소스
  
  ```javascript
  const SearchFriend = (props) => {
  let history = useHistory();
  let [inputValue, setInputValue] = useState();
  const [friendDetail, setFriendDetail] = useState(props.setFriendDetail);
  const [params, setParams] = useState({});
  ```
  
  ```javascript
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

  ```


---
- 20210531 기록
- ---

* [x] Friends.js 검색 모달 추가 (기능 구현 X)

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120178641-ae229a00-c244-11eb-9acc-8eba28402295.gif" />

* [x] Chatroom 단순화 구현

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120149682-0649a400-c225-11eb-81c5-cd5fdebff33f.gif" />

  성공 소스
  ```javascript
  <Route path="/chatroom/:id" render={() => <Chatroom />}></Route>
  ```
  
  ```javascript
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Chatroom.css";
import data from "../friendsData";

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
          <li className="chat-title li-row">{data[id].name}</li>
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

  ```

---
- 20210529 기록 : 프로필 디테일 재도전 및 성공 (소스 상태는 지못미지만 우선 성공입니다.)
- ---

* [x] Chatroom (페이지 이동만 `/chatroom/:id` 구분 상태)

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120066035-83eba380-c0af-11eb-9af3-8327c1a132e7.gif" />


* [x] 시도 성공 화면

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120059162-a0c1b000-c08a-11eb-8f8c-dfc6adcbf2ec.gif" />

###### 이미지는 https://placeimg.com/900/1500/any 로 임의 사용하였습니다.


+ 이미지 수정 및 프로필 디테일 시도 실패 건  
  성공 소스
  ```javascript
    const [friendDetail, setFriendDetail] = useState(props.setFriendDetail);
    const [params, setParams] = useState({});
    
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
        </div>
      </>
    );
  };
    
    ...
    
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
          
          ...
          
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
                          >
  ```



---
- 20210528 기록 : 일부 내용 함수로 전환 & 토클 버그 수정
- ---

+ 이미지 수정 및 프로필 디테일 시도 실패  
  ###### (Friends.js 에서 처리하려고 했는데 전체 덮는 div가 만들어 지지 않았음, App.js 에서 건드려야할 것 같다 느낌) 
  실패 소스
  ```javascript
   const FriendDetail = ({ profileImage, name, stateMsg }) => {
    return (
      <>
        <div className="friendDetail">
          <img src={profileImage} alt={name} />
          <p>{name}</p>
          <p>{stateMsg}</p>
        </div>
      </>
    );
  };
  ```
  ```javascript
  props.friendsData.map((friend) => {
                  if (friend.birthDay === true) {
                    return (
                      <li
                        className="li-col"
                        key={friend.id}
                        onClick={(e) => {
                          e.preventDefault();
                          FriendDetail(friend);
                          setFriendDetail(true);
                        }}
                      >  ...

  ```
  
  
  
* [x] 버그 수정 완료

<img width="30%" src="https://user-images.githubusercontent.com/75153322/119943103-8d044400-bfcd-11eb-8de8-3abae6418bde.gif" />

```javascript
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
  
  {birthModal === true
              ? arrow(setBirthModal, true)
              : arrow(setBirthModal, false)}
```

```javascript
e.preventDefault();
// 미 기재로 인한 버그로 수정 완료했습니다.
```



---
- 20210427 기록
- ---

버그 : 토글 아이콘 클릭시 새로고침 버그 (클릭 한번에 새로고침)

<img width="30%" src="https://user-images.githubusercontent.com/75153322/119943813-80342000-bfce-11eb-86ac-8e0a8b0231eb.gif" />

```javascript
import React, { useState } from 'react';
import './Friends.css';

function Friends(props){
  let [birthModal, setBirthModal] = useState(true);
  let [favModal, setFavModal] = useState(true);
  let [recommModal, setRecommModal] = useState(true);
  let [channModal, setChannModal] = useState(true);
  let [friendsModal, setFriendsModal] = useState(true);

  return (
    <>
      <div className="friends-wrap">
        <ul className="ul-row">
          <li className="li-row">Friends</li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-search"> </a></li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-user-plus"> </a></li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-music"> </a></li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-cog"> </a></li>
        </ul>
      </div>
      <div className="friends-list-wrap">
        <ul className="ul-col">
          <li className="li-col">
            <a href="/" className="thumb-img-s-my"> </a>
            <div className="text">
              <h4>어썸지니</h4>
              <p>겅부쟁이~</p>
            </div>
          </li>
          
          {/* 생일 */}
          <ul>
            <h6>Friends with Birthdays</h6>

            {
              birthModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setBirthModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : null
              // (<a href="/" className="toggle-arrow-s" onClick={()=>{ setBirthModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }
            
            {
              birthModal === true
              ? (
              props.friendsData.map((friend)=>{
                  if (friend.birthDay === true){
                    return (
                      <li className="li-col" key={friend.id}>
                        <div className="update-img-dot">.</div>
                        <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                        <div className="text">
                          <h4>{friend.name} 🎂</h4>
                          <p>{friend.stateMsg}</p>
                        </div>
                        <a href="/" className="gift-shop round-btn-s">Gift Shop <i className="fas fa-gift red"></i></a>
                      </li>
                    );
                  }
              })
              )
              : null
              
            }
            <li className="li-col">
              <a href="/" className="thumb-img-s-birth"> </a>
              <div className="text">
                <h4>View more birthdays</h4>
              </div>
              <a href="/" className="go-arrow-s">100 <i className="fas fa-chevron-right"></i></a>
            </li>
          </ul>

          {/* 즐겨찾기 */}
          <ul>
            <h6>Favorites</h6>
            {
              favModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFavModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFavModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }
            {
              favModal === true
              ? (
                props.friendsData.map((friend)=>{
                  if (friend.fav === true){
                    if (friend.music === false) {
                      return (
                        <li className="li-col" key={friend.id}>
                          <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                          <div className="text">
                            <h4>{friend.name}</h4>
                            <p>{friend.stateMsg}</p>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li className="li-col" key={friend.id}>
                          <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                          <div className="text">
                            <h4>{friend.name}</h4>
                            <p>{friend.stateMsg}</p>
                          </div>
                          <a href="/" className="music-play round-btn-s">{friend.musicTitle} <i className="fas fa-play green"></i></a>
                        </li>
                      );
                    }
                  }
                })
              )
              : null
            }
          </ul>

          {/* 추천친구 */}
          <ul>
            <h6>Recommended Friends</h6>
            {
              recommModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setRecommModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setRecommModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }

            {
              recommModal === true
              ? (<li className="li-col">
                  <a href="/" className="thumb-img-s-recomm"> </a>
                  <div className="text">
                    <h4>Discover more people</h4>
                  </div>
                  <a href="/" className="go-arrow-s">100 <i className="fas fa-chevron-right"></i></a>
                </li>)
              : null
            }
          </ul>

          {/* 채널 */}
          <ul>
            <h6>Channel</h6>
            {
              channModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setChannModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setChannModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }

            {
              channModal === true
              ? (<li className="li-col">
                  <a href="/" className="thumb-img-s-channel"> </a>
                  <div className="text">
                    <h4>Channel</h4>
                  </div>
                  <a href="/" className="go-arrow-s">100 <i className="fas fa-chevron-right"></i></a>
                </li>)
              : null
            }
            {
              channModal === true
              ? props.channelData.map((channel)=>{
                  return (
                    <li className="li-col" key={channel.id}>
                      <a href="/" className="thumb-img-s-channel" style={{ background: `white url(${channel.profileImage}) no-repeat top center/100%`, }}> </a>
                      <div className="text">
                        <h4>{channel.name}</h4>
                        <p>{channel.stateMsg}</p>
                      </div>
                    </li>
                  );
                })
              : null
            }
          </ul>

          {/* 친구목록 */}
          <ul>
            <h6>Friends 100</h6>
            {
              friendsModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFriendsModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFriendsModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }
            
            {
              friendsModal === true
              ? (
                props.friendsData.map((friend)=>{
                return (
                  <li className="li-col" key={friend.id}>
                    <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                    <div className="text">
                      <h4>{friend.name}</h4>
                      <p>{friend.stateMsg}</p>
                    </div>
                  </li>
                );
              }))
              : null
            }
          </ul>


        </ul>
      </div>
    </>
  );
}

export default Friends;
```

