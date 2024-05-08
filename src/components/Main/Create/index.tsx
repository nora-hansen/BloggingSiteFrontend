import './Create.css'

function Create()
{
    const handleChange = (event) => {
        const inputValue = event.target.value
        const name = event.target.name
    }

    return(
        <div className="create-post-page">
            <h1>Create new post</h1>
            <form>
                <div className="create-post-input-section">
                    <input type="text" name="title" placeholder="Title (optional)"/>
                    <label htmlFor="content" ></label>
                    <textarea id="content" name="content" placeholder="What's on your mind?">
                    </textarea>
                </div>
                <div className="create-post-info-edit">
                        <fieldset>
                        <legend>Visibility</legend>
                            <div className="create-post-visibility-radio">
                                <input type="radio" id="Public" name="visibility" value="public"/> 
                                <label htmlFor="Public">Public</label>
                                <input type="radio" id="FriendsOnly" name="visibility" value="friendsonly"/>                     
                                <label htmlFor="FriendsOnly">Friends only</label>
                                <input type="radio" id="Private" name="visibility" value="private"/> 
                                <label htmlFor="Private">Private</label>
                            </div>
                        </fieldset>
                </div>
                <div className="create-post-buttons">
                    <button>Save as draft</button>
                    <button>Post</button>
                </div>
            </form>

        </div>
    )
}

export default Create;