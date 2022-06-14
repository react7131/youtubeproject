import React from "react";
import { useContext } from "react";
import { videoContext } from "../context/videoContext";

const VideoDetail = () => {

    const { selectedVideo } = useContext(videoContext);
    if(selectedVideo) {
    return (
       <>
        <div className="row  mt-4">
             <iframe  className="col-12" width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h5 className="mt-2">{selectedVideo.snippet.title}</h5>
            <p className="text-muted mb-2">{selectedVideo.snippet.description}</p> 
            <span className="text-muted mb-4">{(selectedVideo.snippet.publishedAt).slice(0,10)}</span>   
        </div>
       </> 
    )
    } else return null
}

export default VideoDetail;