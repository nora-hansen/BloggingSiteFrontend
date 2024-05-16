import './UserSideBar.css'
import Bio from './Bio'
import UserImageName from './UserImageName'
import Buttons from './Buttons'

function UserSideBar(
        user: {iconUrl: string, displayName: string, bio: string, postColor: string, fontColor: string,
        userId: number}
    ) {
    return(
        <div className='profile-user-details'>
                <UserImageName displayName={user.displayName} iconUrl={user.iconUrl} />
                <Bio postColor={user.postColor} fontColor={user.fontColor} bio={user.bio}/>
                <Buttons userId={user.userId} />
            </div>
    )
}

export default UserSideBar