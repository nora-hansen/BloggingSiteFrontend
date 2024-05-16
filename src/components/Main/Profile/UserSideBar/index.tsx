import { useContext } from 'react'
import './UserSideBar.css'
import { UserContext } from '../../../../App'
import { Link } from 'react-router-dom'

function UserSideBar(
        user: {iconUrl: string, displayName: string, bio: string, postColor: string, fontColor: string,
        userId: number}
    ) {
    const userContext = useContext(UserContext)

    return(
        <div className='profile-user-details'>
                <div className="profile-image-name">
                    <img src={user?.iconUrl ? user?.iconUrl : "../hamster.jpg"}></img>
                    <h1>{user?.displayName ? user?.displayName : "Anonymous Hamster"}</h1>
                </div>
                <div className="profile-bio"                 
                style={{backgroundColor: user?.postColor ?  user?.postColor : "#FFFFFF", color:  user?.fontColor ?  user?.fontColor : "#000000"}} >
                    <p>{user?.bio}</p>
                </div>
                {Number(user?.userId) == userContext.user?.id && <Link to="/edit-profile"><button>Edit profile</button></Link>}
                {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && <button>Add friend</button>}

            </div>
    )
}

export default UserSideBar