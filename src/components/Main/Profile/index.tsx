import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.css'
import { IPost, IUser, PostContext, UserContext } from '../../../App'
import Post from '../All/Post'

import tempProfiles from '../../../temp-profiles'
import tempUsers from '../../../temp-multiple-users'

import env from './../../../environment'

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
    const [posts, setPosts] = useState<IPost[]>()
    const { userId } = useParams<{ userId?: string }>();

    useEffect(() => {
        fetch(`${env.url}/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))

        fetch(`${env.url}/posts?userid=${userId}`)
            .then(response => response.json())
            .then(data => setPosts(data))

        tempProfiles.map((profile) => {
            if(user && user.profileId === profile.id)
                {
                    setProfile(profile)
                    setBgColor(profile?.bgColor)
                }
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    if(!user || !posts)
        {
            return <p>Loading...</p>
        }

    if(!userId) {
        return <div>Cool 404 page</div>
    }

    return(
        <div className="profile">
            <div className='profile-user-details'>
                <div className="profile-image-name">
                    <img src={user?.iconUrl ? user?.iconUrl : "../hamster.jpg"}></img>
                    <h1>{user?.displayName ? user?.displayName : "Anonymous Hamster"}</h1>
                </div>
                <div className="profile-bio"                 
                style={{backgroundColor: profile?.postColor ?  profile?.postColor : "#FFFFFF", color:  profile?.fontColor ?  profile?.fontColor : "#000000"}} >
                    <p>{user?.bio}</p>
                </div>
                <button>Add Friend</button>
            </div>
            <div className="profile-posts"
                >
                {posts.map((post, index) => 
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