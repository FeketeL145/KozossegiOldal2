import { error } from "console";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function postSingleElement() {
    const param = useParams();
    const [post, setPost] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        const fetchItem = async () => {
          try {
            await axios.GET(`http://localhost/api/items/${post.id}`) 
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
            if (!response.ok) {
              throw new Error('Failed to fetch item');
            }
    
            const data = await response.json();
            setPost(data);
          } catch (error) {
            console.error('Error fetching item:', error);
          }
        };
    
        fetchItem();
      }, [id]);
    

    return (
    <div>
      {isFetchPending || !posts.id ? (<div className='spinner-border'></div>) : (
        <div>
            <div>
                <div className='postcard card col-xs-12 col-md-4 col-xl-2 d-inline-block m-1 p-2 text-center'>
                    <p className='posttext'>{post.author}</p>
                    <p className='posttext'>{post.category}</p>
                    <img className="img-fluid img-responsive card-image" src={post.image} alt={post.title} />
                    <p className='posttext'>{post.title}</p>
                    <p className='posttext'>{post.content}</p>
                    <p className='posttext'>Feltöltés dátuma: <br></br>{post.createdTime}</p>
                    <NavLink to={`/`}>
                        <button className="bi bi-backspace">Vissza</button>
                    </NavLink>
                </div>
            </div>
        </div>
      )}
    </div>
    );
}

/*
useEffect(() => {
        setFetchPending(true);
        (async() => {
            try{
            const response = await fetch(`http://localhost:5144/api/Post/id?Id=01a504cd-187c-49e3-8b67-b5dd45359822`);
            const post2 = await response.json();
            setPost(post2);
        } 
        catch(error){
            console.log(error);
        }
        finally{
            setFetchPending(false);
        }
        })();
    },[id]);
*/ 
export default postSingleElement;