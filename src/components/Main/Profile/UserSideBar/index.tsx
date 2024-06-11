import './UserSideBar.css'
import Bio from './Bio'
import UserImageName from './UserImageName'
import Buttons from './Buttons'
import { useContext } from 'react'
import { UserContext } from '../../../../App'

function UserSideBar(
        user: {iconUrl: string, displayName: string, bio: string, postColor: string, fontColor: string,
        userId: number}
    ) {
    const userContext = useContext(UserContext)

    return(
        <div className='profile-user-details'>
            <UserImageName displayName={user.displayName} iconUrl={user.iconUrl} />
            <Bio postColor={user.postColor} fontColor={user.fontColor} bio={user.bio}/>
            {user.userId === userContext.user.id &&
            <p>This is you! :)</p>
            }
            <Buttons userId={user.userId} />
        </div>
    )
}

export default UserSideBar