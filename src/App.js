/* eslint-disable */

import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Friends from "./Components/Friends";
import Chats from "./Components/Chats";
import Chatroom from "./Components/Chatroom";
import News from "./Components/News";
import SearchFriend from "./Components/SearchFriend";

// import News from './Components/News';
// import Shopping from './Components/Shopping';
// import More from './Components/More';

import friendsData from "./friendsData";
import channelData from "./channelData";

function App() {
  const friends = <i className="far fa-user"></i>;
  const chats = <i className="far fa-comment"></i>;
  const news = <i className="fas fa-hashtag"></i>;
  const shopping = <i className="fas fa-shopping-bag"></i>;
  const more = <i className="fas fa-ellipsis-h"></i>;
  const navMenu = [friends, chats, news, shopping, more];
  const nav = ["friends", "chats", "news", "shopping", "more"];
  const [friendDetail, setFriendDetail] = useState(false);
  const [params, setParams] = useState({});

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Route
            path="/search"
            render={() => (
              <SearchFriend
                nav={nav}
                navMenu={navMenu}
                setFriendDetail={setFriendDetail}
              />
            )}
          ></Route>
          <Route
            path="/chats"
            render={() => <Chats nav={nav} navMenu={navMenu} />}
          ></Route>
          <Route path="/chatroom/:id" render={() => <Chatroom />}></Route>
          <Route
            path="/news"
            render={() => <News nav={nav} navMenu={navMenu} />}
          ></Route>

          <Route
            exact={true}
            path={["/", "/friends"]}
            render={() => (
              <Friends
                nav={nav}
                navMenu={navMenu}
                friendsData={friendsData}
                channelData={channelData}
                setFriendDetail={setFriendDetail}
                setParams={setParams}
              />
            )}
          ></Route>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
