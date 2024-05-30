import { useContext, useEffect, useState } from 'react'
import './Buttons.css'
import { UserContext } from '../../../../../App'
import { Link } from 'react-router-dom'
import env from '../../../../../environment'

function Buttons(user: {userId: number}) {
    const userContext = useContext(UserContext)
    const [activeFriendRequest, setActiveFriendRequest] = useState<boolean>()
    const [isFriend, setIsFriend] = useState<boolean>(false)

    useEffect(() => {
        if (user?.userId !== userContext.user?.id)  // Check if this is the profile
                                                    //  of the signed in user
        {
            if (userContext.user && !userContext.user.friends.some(f => user.userId === f.id))
                fetch(`${env.url}/friendrequests?senderId=${userContext.user?.id}&recipientId=${user?.userId}`)
                .then(response => {
                    if(!response.ok) throw new Error(`${response.status}`)
                    else return response.json()
                })
                .then(data => setActiveFriendRequest(data))
                .catch((error) => {
                    console.log(error)
                })
            else setIsFriend(true)
        }
    }, [user?.userId, userContext.user?.id])

    const handleClick = (event) => {
        if (event.target.name === "addfriend")
        {
            fetch(`${env.url}/friendrequests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userContext.bearer}`
                },
                body: JSON.stringify({
                    senderId: userContext.user.id,
                    recipientId: user.userId
                })
            })
            .then(response => {
                if(!response.ok) throw new Error(`${response.status}`)
                else return response.json()
            })
            .then(() => setActiveFriendRequest(true))
        }
        if (event.target.name === "removefriend")
        {
            fetch(`${env.url}/userfriend?userid=${userContext.user.id}&friendId=${user.userId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${userContext.bearer}`
                    }
                }
            )

            userContext.setUser({...user, friends: userContext.user.friends.filter(f => f.id != user.userId)})
        }
    }

    return(
        <>
            {Number(user?.userId) == userContext.user?.id && <Link to="/edit-profile"><button>Edit profile</button></Link>}
            {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && !activeFriendRequest && !isFriend && <button name="addfriend" onClick={handleClick}>Add friend</button>}
            {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && activeFriendRequest && <p>Friend request sent!</p>}
            {Number(user?.userId) != userContext.user?.id && isFriend && userContext.bearer != ""
            && <button onClick={handleClick}>Remove friend</button>
            }
        </>
    )
}

export default Buttons