import './FriendGrid.css'
import FriendGridItem from './FriendGridItem'
import { IUser } from '../../All/Post'

function FriendGrid(user: {friends: IUser[]}) {
    return(
        <>
            <h3>Friends</h3>
            <div className='friend-grid'>
                {user.friends.map((fr, index) => 
                    <FriendGridItem
                    key={index} 
                    friendId={fr.id}
                    displayName={fr.displayName}
                    iconUrl={fr.iconUrl}
                    />
                )}
            </div>
        </>
    )
}

export default FriendGrid