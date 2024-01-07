import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "./HomePage.css";
import "../global.css"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="postcategory">
        <div className="category">
          <div className="morebutton">
            <div className="morebuttonrectangle" />
            <img className="moreicon" alt="" src="/moreicon@2x.png" />
            <div className="moretext">Discover more</div>
          </div>
          <div className="post">
            <img className="postimage-icon" alt="" src="/postimage@2x.png" />
            <div className="postimageoverlay" />
            <div className="postcontentbox" />
            <div className="posttitle">Post title</div>
            <div className="postcontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut...
            </div>
            <div className="postcontentoverlay" />
            <div className="profiledname">Display name</div>
          </div>
          
          <div className="categorytitle">
            <div className="categorytitle1">CategoryName</div>
            <img className="categoryicon" alt="" src="/categoryicon@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
