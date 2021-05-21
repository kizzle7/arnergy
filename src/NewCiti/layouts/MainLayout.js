import React, { useState } from "react";
import FixedTopnav from "../components/Mainlayout/FixedTopnav";
import FixedLeftNav from "../components/Mainlayout/FixedLeftNav";
import RightNav from "../components/Mainlayout/RightNav";
import "./index.css";

export default function MainLayout(props) {
  return (
    <div className="mainlayout">
      <FixedTopnav />
      <div className="display-flex">
        <FixedLeftNav />
        <RightNav />
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          marginTop: "6rem",
          marginLeft: "4.7rem",
          marginRight: "1.4rem",
        }}
      >
        <div className="body-part">{props.children}</div>
      </div>
    </div>
  );
}
