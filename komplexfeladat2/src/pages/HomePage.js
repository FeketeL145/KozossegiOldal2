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
    <div className="p-4 m-auto text-center content bg-ivory">
        {isFetchPending ? (<div className="spinner-border"></div>) : (
        <div>
                {posts.map((posts) => (
                    <NavLink key={`/Posts/${posts.id}`} to={`/Posts/${posts.id}`}>
                      <div key = {posts.id} className="card col-sm-3 d-inline-block ms-4" style={{borderRadius: '20px', backgroundColor: '#0A2234', color: 'white'}}>
                        <div className="card-body">
                          <h2 style={{ textAlign: 'center', fontWeight: 'bold'}}>{posts.title}</h2>
                          <p style={{ textAlign: 'center', fontSize: '20px'}}>{posts.category}</p>
                            <img src={posts.image} alt={posts.image} style={{maxWidth: '100%', maxHeight: '50%', objectFit: 'cover', alignSelf: 'center', borderRadius: '10px' }}/>
                          <p style={{ textAlign: 'center', fontSize:'25px' }} className='postcontent mt-3'>{posts.content}</p>
                          <p style={{ textAlign: 'center', fontSize:'18px'}}>Photo by: {posts.author}</p>
                        </div>
                      </div>
                    </NavLink>
                ))}
        </div>
        )}
    </div>
  );
};

export default HomePage;

/*
<div className="p-5 m-auto text-center content bg-ivory">
        {isFetchPending ? (<div className="spinner-border"></div>) : (<div>
                {posts.map((posts) => (
                    <NavLink key={/Posts/${posts.id} to={`/Posts/${posts.id}`}>
  <div key = {posts.id} className="card col-sm-3 d-inline-block m-1 p-2">
    <h2 style={{ textAlign: 'center' }}>{posts.title}</h2>
    <div className="card-body">
      <img src={posts.image} alt={posts.image} style={{maxWidth: '80%', maxHeight: '150px', objectFit: 'cover', alignSelf: 'center' }}/>
    </div>
    <p style={{ textAlign: 'center' }}>{posts.content}</p>
    <p style={{ textAlign: 'right' }}>{posts.author}</p>
    <p style={{ textAlign: 'right' }}>{posts.category}</p>
  </div>
</NavLink>
                ))}
                </div>)}
        </div>






<NavLink key={/Posts/${posts.id} to={`/Posts/${posts.id}`}>
  <div key = {posts.id} className="card col-sm-3 d-inline-block m-1 p-2">
    <h2 style={{ textAlign: 'center' }}>{posts.title}</h2>
    <div className="card-body">
      <img src={posts.image} alt={posts.image} style={{maxWidth: '80%', maxHeight: '150px', objectFit: 'cover', alignSelf: 'center' }}/>
    </div>
    <p style={{ textAlign: 'center' }}>{posts.content}</p>
    <p style={{ textAlign: 'right' }}>{posts.author}</p>
    <p style={{ textAlign: 'right' }}>{posts.category}</p>
  </div>
</NavLink>

<div className='postcard card m-3 text-center p-2'>
            <NavLink key={`/Posts/${posts.id}`} to={`/Posts/${posts.id}`}>
            <img src={posts.image} alt={posts.image} style={{maxWidth: '80%', maxHeight: '150px', objectFit: 'cover', alignSelf: 'center' }} />
            <p className='posttext posttitle'>{posts.title}</p>
            <p className='posttext postcategory'>{posts.category}</p>
            <p className='posttext postcontent'>{posts.content}</p>
            <p className='posttext postauthor mt-3 '>{posts.author}</p>
            </NavLink>
          </div>
*/