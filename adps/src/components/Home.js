import React from "react";
import "./Home.css";
import magicBox from "../magic-bag.png";
import Logo from "../logo.png";

function Home() {
  return (
    <div id="HomePage">
      <div id="mission">
        <div id="logocombination">
          <img id="logo" src={Logo} />
          <p id="Title">Too good to go</p>
          <div />
         
        </div>
      </div>
      <div id="LandingImage">
        <img src={magicBox} />
      </div>
    </div>
  );
}

export default Home;
