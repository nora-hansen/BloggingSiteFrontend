import { useEffect, useState } from 'react';
import './CommentList.css'
import env from '../../../../../environment'
import CommentListItem from './CommentListItem';

interface IComment {
    id: number,
    content: string
    commentDate: string,
    userID: number, 
    postID: number
}

function CommentList(post: {postId: number}) {
    const [comments, setComments] = useState<IComment[]>()

    useEffect(() => {
        fetch(`${env.url}/comments?post=${post.postId}`)
        .then(response => response.json())
        .then(data => setComments(data))
    }, [post.postId])

    if(!comments) return <p>Loading...</p>

    return(
        <div className="comment-list">
            {comments.map((comment, index) => 
            <CommentListItem 
            key={index}
            id={comment.id}
            content={comment.content}
            commentDate={comment.commentDate}
            userID={comment.userID}
            postId={comment.postID}
            />)}
        </div>
    )
}

export default CommentList;