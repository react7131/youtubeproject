import React from "react";
import { useContext } from "react";
import { videoContext } from "../context/videoContext";

const VideoItem = ({video}) => {

    const { setSelectedVideo } = useContext(videoContext);
    return (
        <div 
            className="item row justify-content-between align-items-center mb-2"
            onClick={() => setSelectedVideo(video)}
        >
            <div className="col-6">
                <img className="w-100" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            </div>
            <div className="g-2 col-6">   
                <h6>{video.snippet.title}</h6>
                <p className="text-muted">{video.snippet.channelTitle}</p>
            </div>
        </div>
    )
}

export default VideoItem;