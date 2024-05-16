import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Profile.css'
import { IPost, IUser, PostContext, UserContext } from '../../../App'
import Post from '../All/Post'

import tempProfiles from '../../../temp-profiles'
import tempUsers from '../../../temp-multiple-users'

import env from './../../../environment'
import UserSideBar from './UserSideBar'

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
            .then(response => response.json() )
            .then(data => setUser(data))


        fetch(`${env.url}/posts?userid=${userId}`)
            .then(response => response.json())
            .then(data => setPosts(data))


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetch(`${env.url}/profiles/${user?.profileId}`)
            .then(response => response.json())
            .then(data => setProfile(data))
    }, [user])

    useEffect(() => {
        return setBgColor(profile?.bgColor)
    }, [profile])

    if(!user || !posts || !profile)
    {
        return <p>Loading...</p>
    }

    if(!userId) {
        return <div>Cool 404 page</div>
    }

    return(
        <div className="profile">
            <UserSideBar
                displayName={user?.displayName}
                iconUrl={user?.iconUrl}
                bio={user?.bio} postColor={profile?.postColor} fontColor={profile?.fontColor} userId={Number(userId)}            />
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