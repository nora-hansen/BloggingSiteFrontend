import './All.css'

import { PostContext } from '../../../App';
import { useContext } from 'react';
import Post from './Post';

function All() {

    const postContext = useContext(PostContext)

    if(!postContext.posts)
        return <></>

    return(
        <div className="all-posts-page">
            <h1>All posts</h1>
            <div className="post-list">
                {postContext.posts.map((post, index) => 
                    !post.isDraft && 
                        <Post key={index}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        postDate={post.postDate}
                        userID={post.userID} 
                        visibility={post.visibility} 
                        isDraft={post.isDraft}     
                        />)
                }
            </div>
        </div>
    )
}

export default All;