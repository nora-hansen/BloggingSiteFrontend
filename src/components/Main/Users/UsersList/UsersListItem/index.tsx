import { Link } from 'react-router-dom';
import './UsersListItem.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../../App';

function UsersListItem(user: {iconUrl: string, displayName: string, id: number}) {
    const [isFriend, setIsFriend] = useState<boolean>(false)
    const userContext = useContext(UserContext)
    useEffect(() => {
        if (userContext.user.id)
            setIsFriend(userContext.user.friends.filter(f => f.id === user.id).length > 0)
    }, [])

    return(
        <div className="users-list-item">
            <img className="user-icon" src={user.iconUrl ? user.iconUrl : "../hamster.jpg"} alt={`${user.displayName}'s profile image`}></img>
            <Link to={`/user/${user.id}`}><h2>{user.displayName}</h2></Link>
            {isFriend && <img id="friend-icon" src="./friends.png"></img>}
        </div>
    )
}

export default UsersListItem;