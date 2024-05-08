import { useContext, useState } from 'react';
import './Post.css'
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';

function Post(post: {
    title: string,
    content: string,
    postDate: string,
    userId: number,
    visibility: number,
    isDraft: boolean}
    ) 
{
    const [style, setStyle] = useState("post-content")

    const userContext = useContext(UserContext)

    const handleClick = (event) => {
        if(style === "post-content") 
            setStyle("post-content-full")
        else 
            setStyle("post-content")
    }

    return(
        <div className="post-item">
            <div className="post-user-details">
                <Link to="/user/1"><img src={userContext.user.iconUrl}></img></Link>
                <Link to="/user/1"><p>{userContext.user.displayName}</p></Link>
            </div>
            <div className={style}
                onClick={handleClick}
            >
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            <div className="post-info">
                <p>{post.postDate}</p>
            </div>
        </div>
    )
}

export default Post;