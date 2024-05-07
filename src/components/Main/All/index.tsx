import './All.css'

import { PostContext } from '../../../App';
import { useContext } from 'react';
import Post from './Post';

function All() {

    const postContext = useContext(PostContext)

    return(
        <div className="all-posts-page">
            <h1>All posts</h1>
            {postContext.posts.map((post, index) => 
                <Post key={index} title={post.title}></Post>)
            }
        </div>
    )
}

export default All;