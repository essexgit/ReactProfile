import React from "react";
import "./pages.css";
import SvgTitle from "../ImportImages/SVGTitle";
import SvgPortrait from "../ImportImages/SVGPortrait";

function Home(props) {
  return (
    <div className="container">
      <div className="pageTitle">
        <SvgTitle />
      </div>
      <div className="pagePortrait">
        <SvgPortrait />
      </div>
      <div class="sloganWrapper">
        <h1 className="sloganA">Make the Rules</h1>
        <h1 className="sloganB">Shout the Loudest</h1>
      </div>
    </div>
  );
}

export default Home;
