import FriendListItem from "./FriendListItem";
import './FriendList.css'

import { useContext } from "react";

import { FriendContext } from "../../../App";

interface IFriend {
    name: string,
    iconUrl: string
}

function FriendList()
{
    const context = useContext(FriendContext)
    return(
        <ul className="friend-list">
            {context.friends.map((friend, index) => 
                <FriendListItem name={friend.name} iconUrl={friend.iconUrl} key={index}/>
            )}
        </ul>
    )
}

export default FriendList;