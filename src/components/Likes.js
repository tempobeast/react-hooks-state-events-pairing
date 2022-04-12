import React, { useState } from "react"

function Likes ({upvotes, downvotes}) {
    

    const [newUpvotes, setNewupvotes] = useState(parseInt(upvotes))
    const [newDownvotes, setNewdownvotes] = useState(downvotes)

    console.log(newUpvotes)

    function handleUpvoteClick (e) {
        let updatedUpvote = newUpvotes + 1;
        setNewupvotes(updatedUpvote)
    }

    function handleDownvoteClick (e){
        let updatedDownvote = newDownvotes + 1;
        setNewdownvotes(updatedDownvote)
    }

    return (
        <div className="Likes">
            <button onClick={handleUpvoteClick}>{newUpvotes} 👍🏽</button>
            <button onClick={handleDownvoteClick}>{newDownvotes} 👎🏽</button>
        </div>
    )
}
export default Likes