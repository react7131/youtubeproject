import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { videoContext } from "../context/videoContext";
import youtube from "../api/youtube";

const Search = () => {

    const { setVideos, setSelectedVideo } = useContext(videoContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        onFormSubmit("flower");
      },[])
      
    const onFormSubmit = async(search) => { 
        const response = await youtube.get("/search", {
            params:{
            q: search,
            maxResults: 10
            }  
        })

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(search);
    }

    return(
        <form className="row g-0 col-6 mx-auto mt-2" onSubmit={formSubmit}>
            <div className="col-11">
                <input 
                    type="text" 
                    onChange= {(e) => setSearch(e.target.value)}
                    value= {search}
                    className= "form-control w-100 rounded-0 rounded-start focus-border-0"  
                    placeholder= "Search"
                />
            </div>
            <div className="col-1">
                <button type="submit" className="btn btn-light w-100 rounded-0 rounded-end border text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default Search;