import { useContext, useEffect, useState } from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

import env from '../../../../environment'
import CommentList from '../../Post/CommentList';
import CommentField from '../../Post/CommentField';
import { IComment, PostContext } from '../../../../App';

export interface IUser {
    id: number,
    email: string,
    password: string,
    displayName: string,
    bio: string,
    iconUrl: string,
    profileId: number
  }

function Post(post: {
    id: number
    title: string,
    content: string,
    postDate: string,
    userID: number,
    visibility: number,
    isDraft: boolean,
    comments: IComment[],
    postingUser: IUser
})
{
    const [postingUser, setPostingUser] = useState<IUser>()
    const [commentFieldActivate, setCommentFieldActivate] = useState<boolean>(false)
    const [userLoadComplete, setUserLoadComplete] = useState<boolean>(false)
    const [commentsLoadComplete, setCommentsLoadComplete] = useState<boolean>(false)
    const postContext = useContext(PostContext)

    const handleCheck = () => {
        setCommentFieldActivate(!commentFieldActivate)
    }

    // TODO: HERE!!
    useEffect(() => {
        if(post && !userLoadComplete)
            fetch(`${env.url}/users/${post.userID}`)
                .then(response => response.json())
                .then(data => {
                    postContext.setPosts(postContext.posts.map(p => p.id === post.id ? {...p, postingUser: {
                        id: data.id,
                        email: data.email,
                        displayName: data.displayName,
                        bio: "", // To be added to backend
                        iconUrl: data.iconUrl,
                        profileId: data.profileId
                    } } : p))
                    setUserLoadComplete(true)
                })
        
        if(post && !commentsLoadComplete)
            fetch(`${env.url}/comments?post=${post.id}`)
                .then(response => response.json())
                .then(data => {
                    postContext.setPosts(postContext.posts.map(p => p.id === post.id ? {...p, comments: data} : p))
                    console.log("comments", data)
                    setCommentsLoadComplete(true)
                })

        fetch(`${env.url}/users/${post.userID}`)
            .then(response => response.json())
            .then(data => setPostingUser(data))
    }, [commentsLoadComplete, post, post.userID, postContext, userLoadComplete])

    if(postingUser?.id == undefined)
        return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>

    return(
        <div className="post-item">

            <div className="post-user-details">
                <Link to={`user/${postingUser.id}`}>
                    <img src={postingUser.iconUrl ? postingUser.iconUrl : "../hamster.jpg"} alt={`${postingUser.displayName}'s Profile picture`}></img>
                </Link>
                <Link to={`/user/${postingUser.id}`}>
                    <p>{postingUser.displayName ? postingUser.displayName : "Anonymous Hamster"}</p>
                </Link>
            </div>
            <div className="post-content-full">
                <Link to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </Link>
            </div>
            <input type="checkbox" onChange={handleCheck}></input>
            {commentFieldActivate && 
                <CommentField postId={post.id} />
            }
            <CommentList 
                comments={post.comments}
            />
            <div className="post-info">
                <p>{post.postDate}</p>
            </div>
        </div>
    )
}

export default Post;