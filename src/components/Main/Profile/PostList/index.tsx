import { Link } from 'react-router-dom'
import { IPost, UserContext } from '../../../../App'
import './PostList.css'
import { useContext } from 'react'

function PostList(p: {posts: IPost[]} ) {
    const userContext = useContext(UserContext)

    return(
        <div className="post-list">
            <h3>Posts</h3>
            <ul>
                {p.posts.map((p, index) => 
                    !p.isDraft && (p.visibility === 0 || p.userID === userContext.user.id) &&
                    <>
                        <Link to={`post/${p.id}`}><li key={index}>{p.title || p.content}</li></Link>
                        {p.visibility === 2 &&
                            <img src="../privacy.png"></img>
                        }
                    </>
                )}
            </ul>
        </div>
    )
}

export default PostList