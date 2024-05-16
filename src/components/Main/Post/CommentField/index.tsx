import { useContext, useState } from 'react'
import './CommentField.css'
import env from '../../../../environment'
import { UserContext } from '../../../../App'

function CommentField(post: {postId: number}) {
    const [comment, setComment] = useState<string>("")
    const userContext = useContext(UserContext)

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()

        fetch(`${env.url}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`

            },
            body: JSON.stringify(
            {
                content: comment,
                userID: userContext.user.id,
                postID: post.postId
            })
        })
    }

    return(
        <div className="comment-field">
            <input 
                type="text" 
                id="comment-field-textarea" 
                name="commentinput"
                placeholder="Write a reply..." 
                onChange={handleChange}>
            </input>
            <button onClick={handleClick}>Add comment</button>
        </div>
    )
}

export default CommentField