import { useContext } from 'react'
import { UserContext } from '../../../../App'
import './FriendsList.css'
import { Link } from 'react-router-dom'
import env from '../../../../environment'
import FriendListItem from './FriendListItem'

function FriendsList() {
    const userContext = useContext(UserContext)

    return(
        <div className="friends-list">
        {userContext.user.friends.map((f, index) => {
            return <FriendListItem 
            id={f.id}
            displayName={f.displayName}
            iconUrl={f.iconUrl}
            />
        })}
        </div>
    )
}

export default FriendsList