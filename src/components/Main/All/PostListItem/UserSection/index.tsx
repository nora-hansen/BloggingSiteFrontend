import { Link } from 'react-router-dom'
import './UserSection.css'

function UserSection(postingUser: {id: number, iconUrl: string, displayName: string}) {
    return(
        <div className="post-user-details">
            <Link to={`user/${postingUser.id}`}>
                <img src={postingUser.iconUrl ? postingUser.iconUrl : "../hamster.jpg"} alt={`${postingUser.displayName}'s Profile picture`}></img>
            </Link>
            <Link to={`/user/${postingUser.id}`}>
                <p>{postingUser.displayName ? postingUser.displayName : "Anonymous Hamster"}</p>
            </Link>
        </div>
    )
}

export default UserSection