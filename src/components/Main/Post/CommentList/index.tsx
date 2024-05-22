import { useContext, useEffect, useState } from 'react';
import './CommentList.css'
import env from '../../../../environment'
import CommentListItem from './CommentListItem';
import { IComment, PostContext } from '../../../../App';


function CommentList(post: {comments: IComment[]}) {
    const postContext = useContext(PostContext)

    if (post.comments === undefined) {
        return <p>Where comments</p>
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