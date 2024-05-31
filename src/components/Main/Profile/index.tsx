import { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import './Profile.css'
import { IPost, IUser, PostContext, UserContext } from '../../../App'

import env from './../../../environment'
import UserSideBar from './UserSideBar'
import FriendGrid from './FriendGrid'
import PostList from './PostList'
import ProfilePost from './ProfilePost'

export interface IProfile {
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
    const { userId } = useParams<{ userId?: string }>()
    const [userLoaded, setUserLoaded] = useState<boolean>(false)
    const [friendsLoaded, setFriendsLoaded] = useState<boolean>(false)


    useEffect(() => {
        setFriendsLoaded(false) // In case it is true, left over from pther profile visit
        fetch(`${env.url}/users/${userId}`)
            .then(response => response.json() )
            .then(data => setUser(data))

        setUserLoaded(true)

        fetch(`${env.url}/posts?userid=${userId}`)
            .then(response => response.json())
            .then(data => setPosts(data))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    useEffect(() => {
        fetch(`${env.url}/profiles/${user?.profileId}`)
            .then(response => response.json())
            .then(data => setProfile(data))

        if(userLoaded && !friendsLoaded)
            {        fetch(`${env.url}/userfriend/${user?.id}`)
            .then(response => response.json())
            .then(data => 
                {
                    setUser({...user, friends: data.map((d: { friend: unknown; }) => d.friend)})
                    setFriendsLoaded(true)
                }
            )}
    }, [user])

    useEffect(() => {
        return setBgColor(profile?.bgColor)
    }, [profile])

    if(!user || !posts || !profile)
    {
        return <p>Loading...</p>
    }

    if(!userId || isNaN(Number(userId))) {
        return <Navigate to="/notfound" />
    }

    return(
        <div className="profile">
            <UserSideBar
                displayName={user?.displayName}
                iconUrl={user?.iconUrl}
                bio={user?.bio} postColor={profile?.postColor} fontColor={profile?.fontColor} userId={Number(userId)}            />
            <div className="middle-of-profile">
                <div className="post-list-and-content">
                    <PostList posts={posts}/>
                    <div className="profile-posts">
                        <Routes>
                            <Route
                                path="post/:id"
                                element={<ProfilePost posts={posts} profile={profile} />}
                            />
                        </Routes>
                        {/* {posts.map((post, index) => 
                        <div className="profile-post" key={index}
                        style={{backgroundColor: profile?.postColor ? profile?.postColor : "#FFFFFF", color: profile?.fontColor ? profile?.fontColor : "#000000"}} 
                        >
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                        </div>
                        )} */}
                    </div>
                </div>
                <div className="friends">
                    <FriendGrid
                    friends={user.friends} />
                </div>
            </div>
        </div>
    )
}

export default Profile