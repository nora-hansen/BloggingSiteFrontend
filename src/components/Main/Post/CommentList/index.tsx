import { useContext, useState } from 'react';
import './CommentList.css'
import CommentListItem from './CommentListItem';
import { IComment, PostContext } from '../../../../App';

interface IShowAll {
    showAll: boolean
}


function CommentList(post: {comments: IComment[]}, showAll: boolean) {
    const postContext = useContext(PostContext)
    const [allComments, setAllComments] = useState<boolean>(showAll)

    if (post.comments === undefined) {
        return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>
    }

    if(post.comments === null) {
        return <></>
    }

    return(
        <div className="comment-list">
            {post.comments.map((comment, index) => allComments || index >= post.comments.length-3 ?     (<CommentListItem 
            key={index}
            id={comment.id}
            content={comment.content}
            commentDate={comment.commentDate}
            userID={comment.userID}
            postID={comment.postID}
            commentingUser={comment.commentingUser}
            />) : <></>)}
        </div>
    )
}

export default CommentList;