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
        fetch(`${env.url}/userfriend`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`
            },
            body: JSON.stringify({
                userID: userContext.user.id,
                friendID: friendRequest.senderId
            })
        })

        fetch(`${env.url}/friendrequests?senderid=${friendRequest.senderId}&recipientId=${userContext.user.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${userContext.bearer}`
                }
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