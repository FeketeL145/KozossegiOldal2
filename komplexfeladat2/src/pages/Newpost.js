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
      <div className='postcard card form-group row col-xs-12 col-md-6 col-xl-4 mt-5 p-2 text-center'>
        <div class="input-group mt-3 mb-3">
          <input type="text" class="form-control mt-3" placeholder="Author" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <input type="text" class="form-control mt-2" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"/>
          <input type="text" class="form-control mt-2" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
          <div class="input-group mb-3">
          <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Sport</a></li>
          <li><a class="dropdown-item" href="#">Animal</a></li>
          <li><a class="dropdown-item" href="#">Nature</a></li>
          <li><a class="dropdown-item" href="#">Portrait</a></li>
          <li><a class="dropdown-item" href="#">B@W</a></li>
          <li><a class="dropdown-item" href="#">Art</a></li>
          <li><a class="dropdown-item" href="#">Travel</a></li>
          <li><a class="dropdown-item" href="#">Macro</a></li>
          <li><a class="dropdown-item" href="#">Food</a></li>
        </ul>
        </div>
      </div>
      <input type="submit" value="Beküldés" className="btn btn-primary d-inline mb-2"></input>
        <NavLink to={`/`}>
          <button className="d-inline btn btn-secondary">Vissza</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Newpost;