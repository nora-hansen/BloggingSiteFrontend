import './LeftTop.css'

import { Link } from 'react-router-dom';

function LeftTop()
{
    return(
        <div className="left-top">
            <Link to="/"><button aria-label="Navigate to home page">Home</button></Link>
            <Link to="/all"><button aria-label="Navigate to all posts page">All</button></Link>
            <Link to="/create"><button aria-label="Navigate to create post page">Create</button></Link>
        </div>
    )
}

export default LeftTop;