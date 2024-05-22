import { useParams } from 'react-router-dom';
import './Post.css'
import { useContext, useEffect, useState } from 'react';
import env from '../../../environment';
import { IPost, PostContext, UserContext } from '../../../App';
import { IUser } from '../All/Post';
import PostContent from './PostContent';
import CommentList from './CommentList';
import UserInfo from './UserInfo';
import CommentField from './CommentField';

function Post() {
    const { postId } = useParams<{ postId?: string }>();
    const [post, setPost] = useState<IPost>()
    const [user, setUser] = useState<IUser>()
    const [userLoadComplete, setUserLoadComplete] = useState<boolean>(false)
    const [commentsLoadComplete, setCommentsLoadComplete] = useState<boolean>(false)
    
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    useEffect(() => {
        setPost(postContext.posts.find(p => p.id === Number(postId)))

        if(post && !commentsLoadComplete)
            fetch(`${env.url}/comments?post=${postId}`)
            .then(response => response.json())
            .then(data => {
                postContext.setPosts(postContext.posts.map(p => p.id === Number(postId) ? {...p, comments: data } : p))
                console.log("Comments", post.comments)
                setCommentsLoadComplete(true)
            })

        if(post && !userLoadComplete)
            fetch(`${env.url}/users/${post.userID}`)
                .then(response => response.json())
                .then(data => {
                    postContext.setPosts(postContext.posts.map(p => p.id === Number(postId) ? {...p, postingUser: {
                        id: data.id,
                        email: data.email,
                        displayName: data.displayName,
                        bio: "",
                        iconUrl: data.iconUrl,
                        profileId: data.profileId
                    } } : p))
                    setUserLoadComplete(true)
                })
    }, [commentsLoadComplete, post, postContext, postId, userLoadComplete])

    if(post?.postingUser === undefined || post?.comments === undefined) {
        return <p>Loading</p>
    }

    return(
        <div className="single-post">
            <div className="user-and-post">
            <UserInfo 
                displayName={post.postingUser.displayName}
                iconUrl={post.postingUser.iconUrl}
                id={post.postingUser.id} 
            />
            <PostContent title={post.title} content={post.content} />
            </div>
            {userContext.bearer !== "" && 
            <CommentField 
                postId={post.id}
            />}
            <CommentList comments={post.comments} />
        </div>
    )
}

export default Post