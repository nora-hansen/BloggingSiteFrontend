import LeftTop from './LeftTop';
import ProfileNav from './ProfileNav';
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