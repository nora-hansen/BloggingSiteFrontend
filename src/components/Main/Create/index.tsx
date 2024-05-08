import { useState } from 'react'
import './Create.css'

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
        alert(`Thanks for trying! Not implemented. Your post:\n${post.title}\n${post.content}\nVisibility value: ${post.visibility}`)
    }

    return(
        <div className="create-post-page">
            <h1>Create new post</h1>
            <form onSubmit={handleSubmit}>
                <div className="create-post-input-section">
                    <input type="text" name="title" placeholder="Title (optional)" onChange={handleChange}/>
                    <label htmlFor="content" ></label>
                    <textarea id="content" name="content" placeholder="What's on your mind?" onChange={handleChange}>
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
                <div className="create-post-buttons">
                    <button name="create" value="draft">Save as draft</button>
                    <button name="create" value="post">Post</button>
                </div>
            </form>

        </div>
    )
}

export default Create;