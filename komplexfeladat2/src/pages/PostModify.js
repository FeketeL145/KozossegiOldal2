import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function PostModify() {
    const navigate = useNavigate();
    const param = useParams();
    const id = param.PostId;
    const [PostData, setPost] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try{
                const res = await fetch(`https://localhost:7051/api/Post${id}`);
            const Post = await res.json();
            setPost(Post);
        } 
        catch(error){
            console.log(error);
        }
        finally{
            setFetchPending(false);
        }
        })();
    },[id]);

    return(
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Post módosítása</h2>
            <form onSubmit={
                (event) => {
                    event.persist();
                    event.preventDefault();
                    fetch(`https://localhost:7051/api/Post${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    id: id,
                    title: event.target.title.value,
                    author: event.target.author.value,
                    category: event.target.category.value,
                    content: event.target.content.value,
                    Image: event.target.Image.value,
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
            }
            }>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Cím:</label>
                    <div>
                        <input type="text" name="name" className="form-control" value={PostData.name}/>
                    </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Beküldő:</label>
                    <div>
                        <input type="text" name="kepURL" className="form-control" value={PostData.author}/>
                    </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kategória:</label>
                    <div>
                        <input type="text" name="kepURL" className="form-control" value={PostData.category}/>
                    </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Leírás:</label>
                    <div>
                        <input type="text" name="kepURL" className="form-control" value={PostData.content}/>
                    </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div>
                        <input type="text" name="kepURL" className="form-control" value={PostData.Image}/>
                    </div>
            </div>





            <div className="d-flex justify-content-between">
                    <div className="w-50">
                        <button type="submit" className="btn btn-primary">Mentés</button>
                    </div>
                    <div className="w-50">
                        <NavLink to={`/egy-Post/${PostData.id}`}>
                                <button className="btn btn-secondary">Vissza</button>
                        </NavLink>
                    </div>
            </div>
        </form>
        </div>
    )
}