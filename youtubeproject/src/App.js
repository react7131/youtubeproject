import React, { useState } from "react";
import Search from "./components/search";
import VideoList from "./components/videoList";
import VideoDetail from "./components/VideoDetail";
import Comments from "./components/Comments";
import { videoContext } from "./context/videoContext";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <videoContext.Provider value={{videos, setVideos, selectedVideo, setSelectedVideo}}>
      <div>
        <Search />
        <div className="bg-light mt-3">
            <div className="container mx-auto row ">
              <div className="col-lg-8">
                <VideoDetail />
                <Comments />
              </div>
              <VideoList />
            </div>
        </div>
      </div>
    </videoContext.Provider>
  );
}

export default App;
