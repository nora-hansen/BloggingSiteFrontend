import { Link } from 'react-router-dom';
import './ProfileNav.css'
import { useContext } from 'react';
import { UserContext } from '../../../App';

function ProfileNav()
{
    const userContext = useContext(UserContext)
    return(
        <div className="profile-nav">
            {(userContext.bearer === "") && 
            <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </>
            }
            {(userContext.bearer !== "") && 
            <>
                <Link to="/settings">User settings</Link>
                <Link to="/signout">Sign out</Link>
                <Link to={`/user/${userContext.user?.id}`}><img src={userContext.user?.iconUrl || "../hamster.jpg"} alt="Placeholder image of a hamster on its back."></img></Link>
            </>
            }
        </div>
    );
}

export default ProfileNav;