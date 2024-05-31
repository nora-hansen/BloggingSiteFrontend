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

    const handleDelete = (event) => {
        if (confirm("Are you sure you want to delete this post?")) {
            fetch(`${env.url}/posts/${post.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userContext.bearer}`
                }
            })
            .then(response => {
                if(response.status !== 204)
                    throw new Error("An error occured :(")
            })
            .catch(error => console.error(error))

            postContext.setPosts(postContext.posts.filter(p => p.id !== post.id))
        }
    }

    return(
        <div className="single-post">
            <div className="user-and-post">
                {post.isDraft &&
                    <p className="draft-message">Draft</p>
                }
                <UserInfo 
                    displayName={post.postingUser.displayName}
                    iconUrl={post.postingUser.iconUrl}
                    id={post.postingUser.id} 
                />
                <div className='post-section'>
                    {post.visibility === 2 && post.postingUser.id === userContext.user.id &&
                        <div className="private-indicator">
                            <img src="../privacy.png"></img><p>Only you can see this</p>
                        </div>
                    }
                    <PostContent title={post.title} content={post.content} />
                </div>
            </div>
            {userContext.user.id === post.userID &&
                <button onClick={handleDelete}><img src="../bin.png"></img></button>
            }
            {userContext.bearer !== "" && 
            <CommentField 
                postId={post.id}
            />}
            <CommentList 
                comments={post.comments} 
            />
        </div>
    )
}

export default Post