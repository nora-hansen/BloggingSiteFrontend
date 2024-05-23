import { useContext, useEffect, useState } from 'react';
import './CommentList.css'
import CommentListItem from './CommentListItem';
import { IComment, PostContext } from '../../../../App';


function CommentList(post: {comments: IComment[]}) {
    const postContext = useContext(PostContext)

    if (post.comments === undefined) {
        return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>
    }

    if(post.comments === null) {
        return <></>
    }

    return(
        <div className="comment-list">
            {post.comments.map((comment, index) => 
            <CommentListItem 
            key={index}
            id={comment.id}
            content={comment.content}
            commentDate={comment.commentDate}
            userID={comment.userID}
            postID={comment.postID}
            />)}
        </div>
    )
}

export default CommentList;