import { useContext, useState } from 'react'
import './CommentField.css'
import env from '../../../../environment'
import { PostContext, UserContext } from '../../../../App'

function CommentField(post: {postId: number}) {
    const [comment, setComment] = useState<string>("")
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

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
        .then(response => response.json())
        .then(data => postContext.setPosts(postContext.posts.map(p => p.id === post.postId 
            ? {...p, comments: [...p.comments, data]} : p)
        ))
        setComment("")
    }

    return(
        <div className="comment-field">
            <input 
                type="text" 
                id="comment-field-textarea" 
                name="commentinput"
                placeholder="Write a reply..." 
                value={comment}
                onChange={handleChange}>
            </input>
            <button onClick={handleClick}>Add comment</button>
        </div>
    )
}

export default CommentField