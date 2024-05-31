import { Navigate, useParams } from 'react-router-dom';
import './Post.css'
import { useContext, useEffect, useState } from 'react';
import env from '../../../environment';
import { IPost, PostContext, UserContext } from '../../../App';
import PostContent from './PostContent';
import CommentList from './CommentList';
import UserInfo from './UserInfo';
import CommentField from './CommentField';

function Post() {
    const { postId } = useParams<{ postId?: string }>();
    const [post, setPost] = useState<IPost>()
    // const [userLoadComplete, setUserLoadComplete] = useState<boolean>(false)
    
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    useEffect(() => {
        setPost(postContext.posts.find(p => p.id === Number(postId)))

        if(post && post.postingUser === undefined)
            fetch(`${env.url}/users/${post.userID}`)
                .then(response => response.json())
                .then(data => {
                    postContext.setPosts(postContext.posts.map(p => p.id === Number(postId) ? {...p, postingUser: {
                        id: data.id,
                        email: data.email,
                        displayName: data.displayName,
                        bio: "",
                        iconUrl: data.iconUrl,
                        profileId: data.profileId,
                        friends: data.friends
                    } } : p))
                })
    }, [post, postContext, postId])

    if(post?.postingUser === undefined) {
        return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>
    }

    if(post.postingUser.id !== userContext.user.id && post.visibility === 2)
        return <Navigate to="/notfound" />

    return(
        <div className="single-post">
            <div className="user-and-post">
            {post.isDraft &&
                <p>Draft</p>
            }
            <UserInfo 
                displayName={post.postingUser.displayName}
                iconUrl={post.postingUser.iconUrl}
                id={post.postingUser.id} 
            />
            <PostContent title={post.title} content={post.content} />
            {post.visibility === 2 && post.postingUser.id === userContext.user.id &&
                <div>
                    <img src="../privacy.png"></img><p>Only you can see this</p>
                </div>
            }
            </div>
            {userContext.bearer !== "" && 
            <CommentField 
                postId={post.id}
            />}
            <CommentList 
                comments={post.comments} 
                showAll={true}
            />
        </div>
    )
}

export default Post