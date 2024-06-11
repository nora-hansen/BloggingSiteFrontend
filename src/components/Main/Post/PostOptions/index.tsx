import { useContext } from 'react'
import './PostOptions.css'
import { UserContext } from '../../../../App'

function PostOptions() {

    
    const userContext = useContext(UserContext)

    return(
        <div className="post-options">
            <button className="edit-post">Edit</button>
            <button className="delete-post">Delete</button>
        </div>
    )
}

export default PostOptions