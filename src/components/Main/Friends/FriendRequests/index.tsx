import { useContext, useEffect, useState } from 'react'
import './FriendRequests.css'
import { UserContext } from '../../../../App'
import { useNavigate } from 'react-router-dom'
import env from '../../../../environment'
import FriendRequest from './FriendRequest'

function FriendRequests() {
    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (userContext.user === undefined)
            navigate('/login')
        
        fetch(`${env.url}/friendrequests/${userContext.user.id}`)
        .then(response => response.json())
        .then(data => userContext.setFriendRequests(data))
    }, [])
    
    return(
        <>
        {userContext.friendRequests.length === 0 && 
            <i>None yet!</i>
            }
            {userContext.friendRequests.length > 0 && 
                userContext.friendRequests.map((fr, index) => 
                    <FriendRequest 
                        senderId={fr.senderId}
                        senderIconUrl={fr.senderIconUrl}
                        senderName={fr.senderName}
                    />
                )
            }
        </>
    )
}

export default FriendRequests