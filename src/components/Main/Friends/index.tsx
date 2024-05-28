import { useContext } from 'react'
import './Friends.css'
import { UserContext } from '../../../App'
import { Navigate } from 'react-router-dom'
import FriendRequests from './FriendRequests'
import FriendsList from './FriendsList'

function Friends() {
    const userContext = useContext(UserContext)

    if (userContext.bearer == "")
        return <Navigate to="/login" />

    if(userContext.bearer != "")
        console.log("f", userContext.user.friends)

    return(
        <div className="friends">
            <h1>Friend Requests ({userContext.friendRequests.length})</h1>
            <FriendRequests />
            <h1>Friends</h1>
            {userContext.user.friends && 
                <FriendsList />
            }
            {userContext.user.friends.length === 0 &&
            <h3>No friends yet. Try saying hi to someone!</h3>
            }
        </div>
    )
}

export default Friends