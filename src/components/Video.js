import React from "react"


function Video ({video, title, views, createdAt}) {

    return (
        <div className="App">
            <iframe
            width="919"
            height="525"
            src={video}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{title}</h1>
            <p>{views} | {createdAt}</p>
        </div>
        
        )

}
    export default Video