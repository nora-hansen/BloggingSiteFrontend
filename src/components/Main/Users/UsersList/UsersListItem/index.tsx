import { Link } from 'react-router-dom';
import './UsersListItem.css'
import env from '../../../../../environment'

function UsersListItem(user: {iconUrl: string, displayName: string, id: number}) {
    return(
        <div className="users-list-item">
            <img src={user.iconUrl ? user.iconUrl : "../hamster.jpg"} alt={`${user.displayName}'s profile image`}></img>
            <Link to={`/user/${user.id}`}><h2>{user.displayName}</h2></Link>
        </div>
    )
}

export default UsersListItem;