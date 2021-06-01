import React from "react";
import "./Nav.css";

function Nav({ nav, navMenu }) {
  return (
    <>
      <ul className="navMenuList">
        {navMenu.map((a, i) => {
          return (
            <li className="" key={i}>
              <a href={nav[i]} className="navLink">
                {" "}
                {a}{" "}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Nav;
