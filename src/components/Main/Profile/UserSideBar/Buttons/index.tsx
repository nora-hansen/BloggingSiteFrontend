import { useContext, useEffect, useState } from 'react'
import './Buttons.css'
import { UserContext } from '../../../../../App'
import { Link } from 'react-router-dom'
import env from '../../../../../environment'

function Buttons(user: {userId: number}) {
    const userContext = useContext(UserContext)
    const [activeFriendRequest, setActiveFriendRequest] = useState<boolean>()

    useEffect(() => {
        if (user?.userId !== userContext.user?.id)
        {
            fetch(`${env.url}/friendrequests?senderId=${userContext.user?.id}&recipientId=${user?.userId}`)
            .then(response => {
                if(!response.ok) throw new Error(`${response.status}`)
                else return response.json()
            })
            .then(data => setActiveFriendRequest(data))
            .catch((error) => {
                console.log(error)
            })
        }
    }, [user?.userId, userContext.user?.id])

    return(
        <>
            {Number(user?.userId) == userContext.user?.id && <Link to="/edit-profile"><button>Edit profile</button></Link>}
            {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && !activeFriendRequest && <button>Add friend</button>}
            {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && activeFriendRequest && <p>Friend request sent!</p>}
        </>
    )
}

export default Buttons