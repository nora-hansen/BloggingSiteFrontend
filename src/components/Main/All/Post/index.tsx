import { useContext } from 'react';
import './Post.css'

function Post(post: {
    title: string,
    content: string,
    postDate: string,
    userId: number,
    visibility: number,
    isDraft: boolean}
    ) 
{
    // DOES NOT EXIST YET
    // Use this for the user's username and picture, and linking to their profile
    //       vvvvvvv
    // const userContext = useContext(UserContext)

    return(
        <div className="post-item">
            <div className="post-user-detals">
                <img src="../hamster.jpg"></img>
                <p>Anonymous hamster</p>
            </div>
            <div className="post-content">
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