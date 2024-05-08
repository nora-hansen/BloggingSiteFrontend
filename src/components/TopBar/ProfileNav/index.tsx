import { Link } from 'react-router-dom';
import './ProfileNav.css'

function ProfileNav()
{
    return(
        <div className="profile-nav">
            <p>Sign out</p>
            <Link to="/user/1"><img src="../hamster.jpg" alt="Placeholder image of a hamster on its back."></img></Link>
        </div>
    );
}

export default ProfileNav;