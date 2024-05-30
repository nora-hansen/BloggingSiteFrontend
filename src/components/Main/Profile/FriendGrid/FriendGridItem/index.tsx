import { Link } from 'react-router-dom'
import './FriendGridItem.css'

function FriendGridItem(friend: {
    friendId: number,
    displayName: string,
    iconUrl: string
}) {

    return(
        <div className="friend-grid-item">
            <img src={friend.iconUrl}></img>
            <Link to={`/user/${friend.friendId}`}><p>{friend.displayName}</p></Link>
        </div>
    )
}

export default FriendGridItem