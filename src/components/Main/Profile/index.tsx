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
                <div className="profile-bio"                 
                style={{backgroundColor: tempProfiles[4].postColor ? tempProfiles[4].postColor : "#FFFFFF", color: tempProfiles[4].fontColor ? tempProfiles[4].fontColor : "#000000"}} >
                    <p>{userContext.user.bio}</p>
                </div>
                <button>Add Friend</button>
            </div>
            <div className="profile-posts"
                >
                {postContext.posts.map((post, index) => 
                <div className="profile-post" key={index}
                style={{backgroundColor: tempProfiles[4].postColor ? tempProfiles[4].postColor : "#FFFFFF", color: tempProfiles[4].fontColor ? tempProfiles[4].fontColor : "#000000"}} 
                >
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
                )}
            </div>
        </div>

    )
}

export default Profile