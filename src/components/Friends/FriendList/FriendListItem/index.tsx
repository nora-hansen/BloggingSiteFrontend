import { Link } from 'react-router-dom';
import './FriendListItem.css'

function FriendListItem(friend: {id: number, name: string,  iconUrl:string})
{
    return(
        <li className="friend-list-item">
            <img src={friend.iconUrl}></img>
            <Link to={`/user/${friend.id}`}><p>{friend.name}</p></Link>
        </li>
    );
}

export default FriendListItem;