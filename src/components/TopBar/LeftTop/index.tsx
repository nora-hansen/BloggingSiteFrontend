import { useContext } from 'react';
import './LeftTop.css'

import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

function LeftTop()
{
    const userContext = useContext(UserContext)
    return(
        <div className="left-top">
            <Link to="/"><button aria-label="Navigate to home page">Home</button></Link>
            <Link to="/all"><button aria-label="Navigate to all posts page">All</button></Link>
            {userContext.bearer !== "" &&
            <>
                <Link to="/create"><button aria-label="Navigate to create post page">Create</button></Link>
                <Link to="/all-users"><button aria-label="See a list of all users">Users</button></Link>
                <Link to="/drafts"><button aria-label="See a list of all users">Drafts</button></Link>
                <Link to="/friends"><button aria-label="See friends">Friends</button></Link>
            </>
            }
        </div>
    )
}

export default LeftTop;