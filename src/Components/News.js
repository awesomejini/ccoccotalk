/* eslint-disable */

import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
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

export default News;
