import FriendListItem from "./FriendListItem/FriendListItem";
import './FriendList.css'


function FriendList()
{
    return(
        <ul className="friend-list">
            <FriendListItem />
        </ul>
    )
}

export default FriendList;