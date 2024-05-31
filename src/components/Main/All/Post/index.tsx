import { useContext, useEffect, useState } from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

import env from '../../../../environment'
import CommentList from '../../Post/CommentList';
import CommentField from '../../Post/CommentField';
import { IComment, PostContext, UserContext } from '../../../../App';

export interface IUser {
    id: number,
    email: string,
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
    const [commentFieldActivate, setCommentFieldActivate] = useState<boolean>(false)
    const postContext = useContext(PostContext)
    const userContext = useContext(UserContext)
    const [postingUser, setPostingUser] = useState<IUser>(post.postingUser)

    const handleCheck = () => {
        setCommentFieldActivate(!commentFieldActivate)
    }

    // TODO: HERE!!
    useEffect(() => {
        if(post.postingUser === undefined)
            fetch(`${env.url}/users/${post.userID}`)
                .then(response => response.json())
                .then(data => {
                    setPostingUser({
                        id: data.id,
                        email: data.email,
                        displayName: data.displayName,
                        bio: "", // To be added to backend
                        iconUrl: data.iconUrl,
                        profileId: data.profileId
                    })
                    // TODO: Why are you mad?
                    postContext.setPosts(postContext.posts.map(p => p.id === post.id ? {...p, postingUser: {
                        id: data.id,
                        email: data.email,
                        displayName: data.displayName,
                        bio: "", // To be added to backend
                        iconUrl: data.iconUrl,
                        profileId: data.profileId
                    }} : p))
                })
    }, [])

    if(postingUser === undefined)
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
                    <h1>{post.title !== "" ? post.title : post.content}</h1>
                </Link>
            </div>
            {post.visibility === 2 && postingUser.id === userContext.user.id &&
                <div>
                    <img src="../privacy.png"></img><p>Only you can see this</p>
                </div>
            }
        </div>
    )
}

export default Post;