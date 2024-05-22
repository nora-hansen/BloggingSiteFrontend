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
    const [loadComplete, setLoadComplete] = useState<boolean>(false)
    
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    useEffect(() => {
        setPost(postContext.posts.find(p => p.id === Number(postId)))
        console.log("I set it", post)

        if(post && post.comments === undefined && !loadComplete)
            fetch(`${env.url}/comments?post=${postId}`)
            .then(response => response.json())
            .then(data => {
                postContext.setPosts(postContext.posts.map(p => p.id === Number(postId) ? {...p, comments: data } : p))
                console.log("Comments", post.comments)
                setLoadComplete(true)
            })

        if(post && post.postingUser === undefined && !loadComplete)
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
                    console.log("User", post.postingUser)
                    setLoadComplete(true)
                })
    }, [post, loadComplete])

    if(post?.postingUser === undefined || post?.comments === undefined) {
        console.log("Where?", post)
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
                comments={post.comments}
            />}
            <CommentList comments={post?.comments} />
        </div>
    )
}

export default Post