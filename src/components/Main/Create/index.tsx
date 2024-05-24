import { useContext, useState } from 'react'
import './Create.css'
import { PostContext, UserContext } from '../../../App'
import { Navigate } from 'react-router-dom'
import env from '../../../environment'

interface IPost {
    title: string,
    content: string,
    postDate: string,
    userId: number,
    visibility: number,
    isDraft: boolean
  }

  const defaultPost: IPost = 
{
    title: "",
    content: "",
    postDate: "",
    userId: 0,
    visibility: 3,
    isDraft: true
}

function Create()
{
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    const [post, setPost] = useState<IPost>(defaultPost)

    const handleChange = (event) => {
        const inputValue = event.target.value
        const name = event.target.name

        if(name == "title") {
            setPost({...post, title: inputValue})
        }
        if(name == "content") {
            setPost({...post, content: inputValue})
        }
        if(name == "visibility") {
            setPost({...post, visibility: inputValue})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(event.target.id === "post") {
            setPost({...post, isDraft: false})
            postContext.setPosts([...postContext.posts, post])
        } 
        else { 
            setPost({...post, isDraft: true})
        }
        
        fetch(`${env.url}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`
            },
            body: JSON.stringify({
                title: post.title,
                content: post.content,
                visibility: Number(post.visibility),
                isDraft: event.target.id === "post" ? false : true
            })
        })
    }

    if(userContext.bearer === "")
        return <Navigate to="/login" />

    return(
        <div className="create-post-page">
            <h1>Create new post</h1>
            <form onSubmit={handleSubmit}>
                <div className="create-post-input-section">
                    <input type="text" name="title" placeholder="Title (optional)" onChange={handleChange}/>
                    <label htmlFor="content" ></label>
                    <textarea id="content" name="content" placeholder="What's on your mind?" onChange={handleChange} required>
                    </textarea>
                </div>
                <div className="create-post-info-edit">
                        <fieldset>
                        <legend>Visibility</legend>
                            <div className="create-post-visibility-radio">
                                <input type="radio" id="Public" name="visibility" value={1} onChange={handleChange} checked={post.visibility == 1}/> 
                                <label htmlFor="Public">Public</label>
                                <input type="radio" id="FriendsOnly" name="visibility" value={2} onChange={handleChange} checked={post.visibility == 2}/>                     
                                <label htmlFor="FriendsOnly">Friends only</label>
                                <input type="radio" id="Private" name="visibility" value={3} onChange={handleChange} checked={post.visibility == 3}/> 
                                <label htmlFor="Private">Private</label>
                            </div>
                        </fieldset>
                </div>
            </form>
            <div className="create-post-buttons">
                <button id="draft" onClick={handleSubmit} name="draft" value="draft">Save as draft</button>
                <button id="post"  onClick={handleSubmit} name="post"  value="post"> Post</button>
            </div>

        </div>
    )
}

export default Create;