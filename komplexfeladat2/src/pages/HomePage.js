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


export function HomePage()
{
  const [posts, setPosts] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);

  useEffect(() => {
    setFetchPending(true);
    fetch("http://localhost:5144/api/Post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch(console.log)  
      .finally(() => {
        setFetchPending(false);
      });
    }, []);

  return (
    <div>
      {isFetchPending ? (<div className='spinner-border'></div>) : (
      <div>
        {posts.map((posts) => (
          <div className='postcard card col-xs-12 col-md-4 col-xl-2 d-inline-block m-1 p-2 text-center'>
            <NavLink key={`/Posts/${posts.id}`} to={`/Posts/${posts.id}`}>
            <p className='posttext'>{posts.id}</p>
            <p className='posttext'>{posts.author}</p>
            <p className='posttext'>{posts.category}</p>
            <img className="img-fluid img-responsive card-image" 
            src={posts.image}
            />
            <p className='posttext'>{posts.title}</p>
            <p className='posttext'>{posts.content}</p>
            <p className='posttext'>Feltöltés dátuma: <br></br>{posts.createdTime}</p>
            </NavLink>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default HomePage;


/*
<div className="bordertester categorytitle">
          <span class="killme">
            <i class="bi bi-bicycle"></i>
            post.
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
*/