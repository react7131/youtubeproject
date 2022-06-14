import React, {useState, useEffect } from "react";
import Comment from "./Comment";
import { useContext } from "react";
import { videoContext } from "../context/videoContext";
import youtube from "../api/youtube";

const Comments = () => {

    const { selectedVideo } = useContext(videoContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if(selectedVideo) {
            (async() => {
      
              const response = selectedVideo? await youtube.get("/commentThreads", {
                  params: {
                      videoId: selectedVideo.id.videoId
                  }
              }) 
              
              : ""
              if(response) {
                setComments(response.data.items)
              }
            })()
        }
    },[selectedVideo])

    const renderComments =comments? comments.map(comment => {
        return (
            <Comment key={comment.id} comment={comment} />
        )
    }) : null
        
    return (
        <>
           <h6 className="mb-1">{comments.length} Comments</h6>
            <hr />
            <div className="mt-3">{renderComments}</div>
        </>
    )
}

export default Comments;