import './LeftTop.css'

function LeftTop()
{
    return(
        <div className="left-top">
            <button aria-label="Navigate to home page">Home</button>
            <button aria-label="Navigate to all posts page">All</button>
            <button aria-label="Navigate to create post page">Create</button>
        </div>
    )
}

export default LeftTop;