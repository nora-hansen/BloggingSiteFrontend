import LeftTop from './LeftTop/LeftTop';
import ProfileNav from './ProfileNav/ProfileNav';
import './TopBar.css'

function TopBar()
{
    return(
        <header>
            <LeftTop />
            <ProfileNav />
        </header>
    )
}

export default TopBar;