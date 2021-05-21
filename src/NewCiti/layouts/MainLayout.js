import React, { useState } from "react";
import FixedTopnav from "../components/Mainlayout/FixedTopnav";
import FixedLeftNav from "../components/Mainlayout/FixedLeftNav";
import "./index.css";
import BodyTopNav from "../components/Mainlayout/BodyTopNav";
import FixedBottomNav from "./../components/Mainlayout/FixedBottomNav";
import RightNav from '../components/Mainlayout/RightNav'
import UserModal from "./../components/Mainlayout/UserModal";
import 'antd/dist/antd.css'; 
import "bootstrap/dist/css/bootstrap.css";

export default function MainLayout(props) {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <div className="mainlayout">
      <FixedTopnav  />
      <div
        className= "display-flex"
      >
        <FixedLeftNav />
        <RightNav />
      </div>
      <div
      style={{
        display: 'flex',
        position:'relative',
        marginTop: '6rem',
        marginLeft:'4.7rem',
        marginRight: '1.4rem'
      }}
      
      >
        <div className="body-part">
        {props.children}


        </div>

      </div>
    </div>
  );
}
