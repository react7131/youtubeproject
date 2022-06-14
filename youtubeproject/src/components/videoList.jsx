import React from "react";
import VideoItem from "./VideoItem";
import { useContext } from "react";
import { videoContext } from "../context/videoContext";

const VideoList = () => {

    const {videos} = useContext(videoContext)

    const renderedVideos =videos.map( video => {
        return (
            <VideoItem video={video} key={video.id.videoId} />
        )
    })

    return (
        <div className="col-lg-4 mt-4">
            {renderedVideos}
        </div>
    )
}

export default VideoList;