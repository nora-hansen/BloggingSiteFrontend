import { Link } from 'react-router-dom'
import './FriendListItem.css'
import env from '../../../../../environment'
import { useContext } from 'react'
import { UserContext } from '../../../../../App'

function FriendListItem(friend: {id: number, iconUrl: string, displayName: string})
{
    const userContext = useContext(UserContext)
    const handleRemove = (event) => {
        fetch(`${env.url}/userfriend?userID=${userContext.user.id}&friendId=${friend.id}`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${userContext.bearer}`
                }
            }
        )

        userContext.setUser({...userContext.user, friends: userContext.user.friends.filter(f => f.id !== friend.id)})
    }

    return(
        <div className="friend-item">
            <img src={friend.iconUrl} alt={`${friend.displayName}'s icon image`}/>
            <Link to={`/user/${friend.id}`}><p>{friend.displayName}</p></Link>
            <button onClick={handleRemove}>Remove Friend</button>
        </div>
    )
}

export default FriendListItem