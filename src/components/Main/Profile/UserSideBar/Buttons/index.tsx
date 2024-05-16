import { useContext } from 'react'
import './Buttons.css'
import { UserContext } from '../../../../../App'
import { Link } from 'react-router-dom'

function Buttons(user: {userId: number}) {
    const userContext = useContext(UserContext)
    return(
        <>
            {Number(user?.userId) == userContext.user?.id && <Link to="/edit-profile"><button>Edit profile</button></Link>}
            {Number(user?.userId) != userContext.user?.id && userContext.bearer != "" && <button>Add friend</button>}
        </>
    )
}

export default Buttons