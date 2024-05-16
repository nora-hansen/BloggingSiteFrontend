import { Link } from 'react-router-dom'
import './UserInfo.css'

function UserInfo(user: {  
    id: number,
    displayName: string,
    iconUrl: string}) {
    return(
        <div className="user-info">
            <img src={user.iconUrl ? user.iconUrl : "../hamster.jpg"}></img>
            {user.id && 
            <Link to={`/user/${user.id}`}><p>{user.displayName }</p></Link>
            }
            {!user.id && <p>Anonymous Hamster</p>}
        </div>
    )
}

export default UserInfo