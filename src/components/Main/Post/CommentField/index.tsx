import './CommentField.css'

function CommentField() {
    return(
        <div className="comment-field">
            <input type="text" id="comment-field-textarea" placeholder="Write a reply..."></input>
            <button>Add comment</button>
        </div>
    )
}

export default CommentField