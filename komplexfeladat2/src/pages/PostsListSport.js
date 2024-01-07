import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";


const PostsListSport = () => {
  return (
    <div className="homepage">
      <div className="postcategoryarrow">
        <div className="category">
          <div className="post">
            <img className="postimage-icon" alt="" src="/postimage@2x.png" />
            <div className="postimageoverlay bordertester" />
            <div className="postcontentbox bordertester" />
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
          
          <div className="categorytitle bordertester">
            <div className="categorytitle1">CategoryName</div>
            <img className="categoryicon" alt="" src="/categoryicon@2x.png" />
          </div>
          <div className="morebutton">
            <div className="morebuttonrectangle" />
            <img className="moreicon" alt="" src="/moreicon@2x.png" />
            <div className="moretext">Discover more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsListSport;