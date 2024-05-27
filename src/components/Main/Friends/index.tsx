import { useContext, useEffect, useState } from 'react'
import './Friends.css'
import { UserContext } from '../../../App'
import FriendList from '../../Friends/FriendList'
import { Navigate } from 'react-router-dom'
import { IUser } from '../All/Post'

function Friends() {
    const userContext = useContext(UserContext)
    const [friendRequests, setFriendRequests] = useState<IUser[]>([])

    useEffect(() => {
        // TODO: Fetch friend requests here...
    }, [])

    if (userContext.bearer == "")
        return <Navigate to="/login" />

    if(userContext.bearer != "")
        console.log("f", userContext.user.friends)

    return(
        <div className="friends">
            <h1>Friend Requests</h1>
            <i>None yet!</i>
            <h1>Friendso</h1>
            {userContext.user.friends && 
                <FriendList />
            }
            {userContext.user.friends == null &&
            <h3>No friends yet. Try saying hi to someone!</h3>
            }
        </div>
    )
}

export default Friends