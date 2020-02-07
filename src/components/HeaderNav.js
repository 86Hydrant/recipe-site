import React from "react";

function HeaderNav() {
  return (
    <div className="header-wrapper">
      <ul className="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <header className="App-header">
        <span id="mostly">Mostly&nbsp;</span>
        Vegan
        <br /> Home Recipes!
      </header>
    </div>
  );
}

export default HeaderNav;
