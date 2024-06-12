import './ProfilePostOptions.css'
import { IPost, UserContext } from '../../../App'
import { useContext, useState } from 'react'
import env from '../../../environment'

function PostOptions(post: 
    {
        post: IPost, 
        handleDelete: (event: unknown) => void, 
        setPosts: () => void, 
        posts: IPost[]
    }
) {
    const [postVisibility, setPostVisibility] = useState<number>(post.post.visibility)
    const userContext = useContext(UserContext)

    const handleChange = (event) => {
        event.preventDefault()
        setPostVisibility(Number(event.target.value))
    }

    const handleSave = (event) => {
        event.preventDefault()
        fetch(`${env.url}/posts/${post.post.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`
            }, 
            body: JSON.stringify({
                ...post.post, visibility: Number(postVisibility)
            })
        })
        .then(
            response => response.json()
        )
        .then(() => {
            
        })
    }

    return(
        <>
            <button 
                onClick={post.handleDelete} 
                className="delete-button"
                title="Delete post"
                aria-label="Delete post">
                    <img 
                        src="../../../bin.png" 
                        alt="Delete post" >
                    </img>
            </button>
            <label htmlFor="visibility">Visibility</label>
            <select value={postVisibility} name="visibility" id="visibility" onChange={handleChange}>
                <option value={0}>Public</option>
                <option value={1}>Friends only</option>
                <option value={2}>Private</option>
            </select>
            {post.post.visibility !== postVisibility && 
                <button 
                    className="save-button"
                    title="Save changes"
                    aria-label="Save changes to post"
                    onClick={handleSave}>
                    <img 
                        src="../../../changes.png" 
                        alt="Save changes to post" 
                        >
                    </img>
                </button>
            }
        </>
    )
}

export default PostOptions