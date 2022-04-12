import React, { useState } from "react"
import Comment from "./Comment"


function Comments({ comments }) {
    

const [showComments, setShowComments] = useState(false)


function handleClick(e) {
    setShowComments(!showComments)
}

// const itemsToDisplay = comments.map(comment => comment.user, comment.comment)
// console.log(itemsToDisplay)


    return (
        <div className="Comments">
            <button onClick={handleClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            {showComments ? comments.map(comment => <Comment key={comment.id} user={comment.user} comment={comment.comment}/>) : null}
        </div>
    )
}

export default Comments