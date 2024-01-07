import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "../css/App.css";
import "../css/index.css";
import "../css/global.css";
import "../css/HomePage.css";


const HomePage = () => {
  return (
    <div>
      <div className="bordertester categorytitle">
        <span class="killme">
          <i class="bi bi-bicycle"></i>
          Sport
        </span>
      </div>

      <NavLink>
        <div className='postcard card col-xs-12 col-md-4 col-xl-2 d-inline-block m-1 p-2 text-center'>
          <img className="img-fluid img-responsive card-image" src='https://dummyimage.com/350x325/0/fff'/>
          <p className='posttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut...
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default HomePage;