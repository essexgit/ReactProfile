import React from "react";
import "./pages.css";
import SvgTitle from "../ImportImages/SVGTitle";
import SvgPortrait from "../ImportImages/SVGPortrait";

function Home(props) {
  return (
    <div className="home--layout">
      <div className="page--title">
        <SvgTitle />
      </div>
      <div className="page--portrait">
        <SvgPortrait />
      </div>
    </div>
  );
}

export default Home;
