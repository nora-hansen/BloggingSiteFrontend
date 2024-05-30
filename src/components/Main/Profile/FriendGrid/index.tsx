import { useContext } from 'react'
import './FriendGrid.css'
import { UserContext } from '../../../../App'
import FriendGridItem from './FriendGridItem'

function FriendGrid() {

    const userContext = useContext(UserContext)
    return(
        <>
            <h3>Friends</h3>
            <div className='friend-grid'>
                {userContext.user.friends.map((fr, key) => 
                    <FriendGridItem />
                )}
            </div>
        </>
    )
}

export default FriendGrid