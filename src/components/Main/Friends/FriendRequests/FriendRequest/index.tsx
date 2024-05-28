import { useContext } from 'react'
import { UserContext } from '../../../../../App'
import env from '../../../../../environment'
import './FriendRequest.css'

function FriendRequest(friendRequest: 
    {
        senderId: number
        senderIconUrl: string, 
        senderName: string,
    }) {

    const userContext = useContext(UserContext)

    const handleAccept = (event) => {
        fetch(`${env.url}/users/${userContext.user.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`
            },
            body: JSON.stringify({
                
            })
            }
        )
    }

    return(
        <div className="friend-item">
            <img src={friendRequest.senderIconUrl} alt={`${friendRequest.senderName}'s icon image`}></img>
            <p>{friendRequest.senderName}</p>
            <button onClick={handleAccept}>Accept</button>
            <button>Deny</button>
        </div>
    )
}

export default FriendRequest