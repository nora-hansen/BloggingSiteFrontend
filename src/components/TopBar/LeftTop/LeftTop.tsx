import './LeftTop.css'

function LeftTop()
{
    return(
        <div className="left-top">
            <button aria-label="Navigate to home page">Home</button>
            <button aria-label="Navigate to all posts page">AllPosts</button>
        </div>
    )
}

export default LeftTop;