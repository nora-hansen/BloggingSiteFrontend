import './Create.css'

function Create()
{
    return(
        <div className="create-post-page">
            <h1>Create new post</h1>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="Title (optional)"></input>
                <label htmlFor="content" ></label>
                <textarea id="content" placeholder="What's on your mind?">

                </textarea>
            </div>
        </div>
    )
}

export default Create;