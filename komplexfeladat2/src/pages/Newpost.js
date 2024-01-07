import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";


const Newpost = () => {
  return (
    <div>
      <div className='postcard card form-group row pb-3 col-xs-12 col-md-4 col-xl-2 m-1 p-2 text-center'>
        <p className='posttext'>Author</p>
        <input></input>
        <p className='posttext'>Kategória</p>
        <input></input>
        <p className='posttext'>Cím</p>
        <input></input>
        <p className='posttext'>Leírás</p>
        <input></input>
        <p className='posttext'>Képurl</p>
        <input></input>
        <br></br>
        <input type="submit" value="Beküldés" className="d-inline"></input>
        <NavLink to={`/`}>
        <button className="d-inline">Vissza</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Newpost;