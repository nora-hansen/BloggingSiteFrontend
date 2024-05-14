import { Link } from 'react-router-dom';
import './ProfileNav.css'

function ProfileNav()
{
    return(
        <div className="profile-nav">
            <Link to="/login">Sign in</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/user/1"><img src="../hamster.jpg" alt="Placeholder image of a hamster on its back."></img></Link>
        </div>
    );
}

export default ProfileNav;