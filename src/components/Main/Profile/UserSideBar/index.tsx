import { useContext } from 'react'
import './UserSideBar.css'
import { UserContext } from '../../../../App'
import { Link } from 'react-router-dom'
import Bio from './Bio'
import UserImageName from './UserImageName'

function UserSideBar(
        user: {iconUrl: string, displayName: string, bio: string, postColor: string, fontColor: string,
        userId: number}
    ) {
    const userContext = useContext(UserContext)

    return(
        <div className='profile-user-details'>
                <UserImageName displayName={user.displayName} iconUrl={user.iconUrl} />
                <Bio postColor={user.postColor} fontColor={user.fontColor} bio={user.bio}/>
                {Number(user?.userId) == userContext.user?.id && <Link to="/edit-profile"><button>Edit profile</button></Link>}
                {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && <button>Add friend</button>}
            </div>
    )
}

export default UserSideBar