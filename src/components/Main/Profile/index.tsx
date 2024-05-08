import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.css'
import { IUser, PostContext, UserContext } from '../../../App'
import Post from '../All/Post'

import tempProfiles from '../../../temp-profiles'
import tempUsers from '../../../temp-multiple-users'

interface IProfile {
    id: number, 
    bgColor: string,
    fontColor: string,
    postColor: string
}

function Profile({ setBgColor = (bgColor: string) => {} }) {
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    const [user, setUser] = useState<IUser>()
    const [profile, setProfile] = useState<IProfile>()
    const { userId } = useParams<{ userId?: string }>();

    if(!userId) {
        return <div>Cool 404 page</div>
    }
    const userIdAsNum = parseInt(userId, 10)

    useEffect(() => {
        tempUsers.map((user) => {
            if(user.id === userIdAsNum)
                setUser(user)
            })
        tempProfiles.map((profile) => {
            if(user && user.profileId === profile.id)
                {
                    console.log(profile.id)
                    setProfile(profile)
                    setBgColor(profile?.bgColor)
                }
            })

    }, [setBgColor, user, userIdAsNum])

    return(
        <div className="profile">
            <div className='profile-user-details'>
                <div className="profile-image-name">
                    <img src={user?.iconUrl}></img>
                    <h1>{user?.displayName}</h1>
                </div>
                <div className="profile-bio"                 
                style={{backgroundColor: profile?.postColor ?  profile?.postColor : "#FFFFFF", color:  profile?.fontColor ?  profile?.fontColor : "#000000"}} >
                    <p>{user?.bio}</p>
                </div>
                <button>Add Friend</button>
            </div>
            <div className="profile-posts"
                >
                {postContext.posts.map((post, index) => 
                <div className="profile-post" key={index}
                style={{backgroundColor: profile?.postColor ? profile?.postColor : "#FFFFFF", color: profile?.fontColor ? profile?.fontColor : "#000000"}} 
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