import './All.css'

import { PostContext, UserContext } from '../../../App';
import { useContext } from 'react';
import Post from './Post';

function All() {

    const postContext = useContext(PostContext)
    const userContext = useContext(UserContext)

    if(!postContext.posts)
        return <></>

    return(
        <div className="all-posts-page">
            <h1>All posts</h1>
            <div className="post-list">
                {postContext.posts.map((post, index) => 
                    !post.isDraft && (userContext.user.id === post.userID || post.visibility < 1) && 
                        <Post key={index}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        postDate={post.postDate}
                        userID={post.userID} 
                        visibility={post.visibility} 
                        isDraft={post.isDraft}     
                        comments={post.comments}
                        postingUser={post.postingUser}
                        />)
                }
            </div>
        </div>
    )
}

export default All;