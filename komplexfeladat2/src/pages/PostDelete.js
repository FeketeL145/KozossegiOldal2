import { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";

export function PostDelete(){
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const [Post, setPost] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
    useEffect(() => {
        setFetchPending(true);
        (async() => {
        try {
        const response = await fetch(`https://localhost:5144/api/Post/${id}`)
        const post2 = await response.json();
        if (!response.ok){
            throw new Error(`status hibakod: ${response.status}`)
        }
        setPost(post2);
            } catch(error) {
                console.log(error);
            }
        finally{
          setFetchPending(false);
      }
    })();
}, [id]);
return (
    <div className="p-5 text-center content bg-whitesmoke">
        {isFetchPending || !Post.id ? (<div className="spinner-border"></div>) : (
        <div>
            <h2>Post törlése</h2>
            <form
                onSubmit={(e) => {
                    e.persist();
                    e.preventDefault();
                    fetch(`https://localhost:5144/api/Post/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(console.log);
                }}
                >
                <div>
                    <NavLink to={`/`}>
                        <button type="submit" class="btn btn-danger">Törlés</button>
                    </NavLink>
                    <NavLink to={`/Post/${Post.id}`}>
                        <button className="btn btn-secondary">Vissza</button>
                    </NavLink>
                </div>
            </form>
        </div>
        )}
    </div>
);
}
