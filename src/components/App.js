import React from "react"
import video from "../data/video.js";
import Video from "./Video"
import Likes from "./Likes"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);
  console.log(video)

return (
  <>
    <Video video={video.embedUrl} title={video.title} views={video.views} createAt={video.createdAt}/>
    <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
    <Comments comments={video.comments}/>
  </>
  )
}

export default App;
