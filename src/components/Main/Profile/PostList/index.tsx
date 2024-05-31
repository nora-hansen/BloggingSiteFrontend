import { Link } from 'react-router-dom'
import { IPost } from '../../../../App'
import './PostList.css'

function PostList(p: {posts: IPost[]}) {

    return(
        <div className="post-list">
            <h3>Posts</h3>
            <ul>
                {p.posts.map((p, index) => 
                    !p.isDraft && p.visibility === 0 && <Link to={`post/${p.id}`}><li key={index}>{p.title || p.content}</li></Link>
                )}
            </ul>
        </div>
    )
}

export default PostList