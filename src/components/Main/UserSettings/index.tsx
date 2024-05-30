import { useNavigate } from 'react-router-dom'
import './UserSettings.css'
import { useContext } from 'react'
import { UserContext } from '../../../App'

function UserSettings() 
{
    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    if (userContext.bearer === "")
    {
        navigate('/login')
    }

    const handleSubmit = (event) => {

    }

    return(
        <div className="user-settings">
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>

            </form>
        </div>
    )
}

export default UserSettings