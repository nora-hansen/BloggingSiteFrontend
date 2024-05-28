import { useContext } from 'react'
import { UserContext } from '../../../../App'
import './FriendsList.css'
import { Link } from 'react-router-dom'

function FriendsList() {
    const userContext = useContext(UserContext)
    return(
        <div className="friends-list">
        {userContext.user.friends.map((f, index) => {
            return <div className="friend-item">
                <img src={f.iconUrl} alt={`${f.displayName}'s icon image`}/>
                <Link to={`/user/${f.id}`}><p key={index}>{f.displayName}</p></Link>
                <button>Remove Friend</button>
            </div>
        })}
        </div>
    )
}

export default FriendsList