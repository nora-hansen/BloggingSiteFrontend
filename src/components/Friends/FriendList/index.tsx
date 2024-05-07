import FriendListItem from "./FriendListItem";
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