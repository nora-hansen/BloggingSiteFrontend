import { useParams } from 'react-router-dom';
import './Post.css'
import { useContext, useEffect, useState } from 'react';
import env from '../../../environment';
import { IPost, UserContext } from '../../../App';
import { IUser } from '../All/Post';
import PostContent from './PostContent';
import CommentList from './CommentList';
import UserInfo from './UserInfo';
import CommentField from './CommentField';

function Post() {
    const { postId } = useParams<{ postId?: string }>();
    const [post, setPost] = useState<IPost>()
    const [user, setUser] = useState<IUser>()
    
    const userContext = useContext(UserContext)

    useEffect(() => {
        fetch(`${env.url}/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [postId])

    useEffect(() => {
        fetch(`${env.url}/users/${post?.userID}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [post])

    if(!post || !user) return <p>Loading</p>

    return(
        <div className="single-post">
            <div className="user-and-post">
            <UserInfo 
                displayName={user.displayName}
                iconUrl={user.iconUrl}
                id={user.id} 
            />
            <PostContent title={post?.title} content={post.content} />
            </div>
            {userContext.bearer !== "" && 
            <CommentField postId={post?.id}/>}
            <CommentList postId={post?.id} />
        </div>
    )
}

export default Post