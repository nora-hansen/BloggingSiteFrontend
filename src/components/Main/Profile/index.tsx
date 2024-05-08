import { useContext } from 'react'
import './Profile.css'
import { PostContext, UserContext } from '../../../App'
import Post from '../All/Post'

function Profile() {
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    return(
        <div className="profile">
            <div className='profile-user-details'>
                <div className="profile-image-name">
                    <img src={userContext.user.iconUrl}></img>
                    <h1>{userContext.user.displayName}</h1>
                </div>
                <div className="bio">
                    <p>{userContext.user.bio}</p>
                </div>
            </div>
            <div className="profile-posts">
                {postContext.posts.map((post, index) => 
                <div className="user-post">
                    <h1 key={index}>{post.title}</h1>
                    <p key={index}>{post.content}</p>
                </div>
                )}
            </div>
        </div>

    )
}

export default Profile