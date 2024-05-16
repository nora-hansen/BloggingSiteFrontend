import { Link, useParams } from 'react-router-dom';
import './Post.css'
import { useEffect, useState } from 'react';
import env from '../../../environment';
import { IPost } from '../../../App';
import { IUser } from '../All/Post';
import PostContent from './PostContent';

function Post() {
    const { postId } = useParams<{ postId?: string }>();
    const [post, setPost] = useState<IPost>()
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        fetch(`${env.url}/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])

    useEffect(() => {
        fetch(`${env.url}/users/${post?.userID}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [post])

    if(!post || !user) return <p>Loading</p>

    return(
        <div className="single-post">
            <div className="user-info">
                <img src={user.iconUrl}></img>
                <Link to={`/user/${user.id}`}><p>{user.displayName}</p></Link>
            </div>
            <PostContent title={post?.title} content={post.content} />
        </div>
    )
}

export default Post