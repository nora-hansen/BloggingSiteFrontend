import './CommentField.css'

function CommentField() {
    return(
        <div className="comment-field">
            <input type="text" id="comment-field-textarea" placeholder="Write a reply..."></input>
        </div>
    )
}

export default CommentField