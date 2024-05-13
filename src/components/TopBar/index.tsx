import LeftTop from './LeftTop';
import Middle from './Middle';
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