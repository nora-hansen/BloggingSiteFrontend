import './FriendListItem.css'

function FriendListItem(friend: {name: string,  iconUrl:string})
{
    return(
        <li className="friend-list-item">
            <img src={friend.iconUrl}></img>
            <p>{friend.name}</p>
        </li>
    );
}

export default FriendListItem;