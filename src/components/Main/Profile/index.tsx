import { useContext, useEffect } from 'react'
import './Profile.css'
import { PostContext, UserContext } from '../../../App'
import Post from '../All/Post'

import tempProfiles from '../../../temp-profiles'

function Profile({ setBgColor = (bgColor: string) => {} }) {
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    useEffect(() => {
        setBgColor(tempProfiles[4].bgColor)
    }, [])

    return(
        <div className="profile">
            <div className='profile-user-details'>
                <div className="profile-image-name">
                    <img src={userContext.user.iconUrl}></img>
                    <h1>{userContext.user.displayName}</h1>
                </div>
                <div className="profile-bio">
                    <p>{userContext.user.bio}</p>
                </div>
            </div>
            <div className="profile-posts">
                {postContext.posts.map((post, index) => 
                <div className="user-post" key={index}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
                )}
            </div>
        </div>

    )
}

export default Profile