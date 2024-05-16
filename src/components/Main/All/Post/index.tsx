import { useContext, useEffect, useState } from 'react';
import './Post.css'
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';
import { DocumentMeta } from 'react-document-meta'

import env from '../../../../environment'
import CommentList from '../../Post/CommentList';

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
    isDraft: boolean}
    ) 
{
    const meta = {
        title: 'BobLOG - All users',
        description: 'All registered users on BobLOG'
    }


    const [style, setStyle] = useState("post-content")
    const [postingUser, setPostingUser] = useState<IUser>()

    const handleClick = (event) => {
        if(style === "post-content") 
            setStyle("post-content-full")
        else 
            setStyle("post-content")
    }

    useEffect(() => {
        fetch(`${env.url}/users/${post.userID}`)
            .then(response => response.json())
            .then(data => setPostingUser(data))
    }, [post.userID])

    // TODO: Reenable this. I had to remove it because the posts in the backend were wrongly set to isDraft
    // if(post.isDraft || post.visibility === 3) 
    //     return <></>

    if(postingUser?.id == undefined)
        return <p>Loading user...</p>

    return(
        <div className="post-item">

            <div className="post-user-details">
                <Link to={`user/${postingUser.id}`}><img src={postingUser.iconUrl ? postingUser.iconUrl : "../hamster.jpg"} alt={`${postingUser.displayName}'s Profile picture`}></img></Link>
                <Link to={`/user/${postingUser.id}`}><p>{postingUser.displayName ? postingUser.displayName : "Anonymous Hamster"}</p></Link>
            </div>
            <div className={style} onClick={handleClick}>
                <Link to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </Link>
            </div>
            <CommentList 
                postId={post.id}
            />
            <div className="post-info">
                <p>{post.postDate}</p>
            </div>
        </div>
    )
}

export default Post;