import { useContext, useState } from 'react'
import { UserContext } from '../../../../../App'
import env from '../../../../../environment'
import './FriendRequest.css'
import { IUser } from '../../../All/Post'

function FriendRequest(friendRequest: 
    {
        senderId: number
        senderIconUrl: string, 
        senderName: string,
    }) {

    const userContext = useContext(UserContext)
    const [newFriend, setNewFriend] = useState<IUser>()

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

        userContext.setUser({...userContext.user, friends: [...userContext.user.friends, {
            id: friendRequest.senderId,
            displayName: friendRequest.senderName,
            iconUrl: friendRequest.senderIconUrl
        }]})

        userContext.setFriendRequests(userContext.friendRequests.filter(fr => fr.senderId !== friendRequest.senderId))
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