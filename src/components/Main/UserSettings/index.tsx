import { useNavigate } from 'react-router-dom'
import './UserSettings.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../../App'
import { IUser } from '../All/Post'
import env from '../../../environment'

function UserSettings() 
{
    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    const [userInput, setUserInput] = useState<IUser>(userContext.user)
    const [password, setPassword] = useState<string>("")

    if (userContext.bearer === "")
    {
        navigate('/login')
    }

    const handleChange = (event) => {
        if(event.target.name === "email")
            setUserInput({...userInput, email: event.target.value})
        if(event.target.name === "displayname")
            setUserInput({...userInput, displayName: event.target.value})
        if(event.target.name === "iconurl")
            setUserInput({...userInput, iconUrl: event.target.value})
        if(event.target.name === "password")
            setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`${env.url}/users/${userContext.user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`
            },
            body: JSON.stringify(userInput)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return(
        <div className="user-settings">
            <h1>Settings</h1>
            <form className="user-setting-fields" onSubmit={handleSubmit}>
                <label className="user-setting-field-and-label" htmlFor="email">
                    Email: <input name="email" type="email" value={userInput.email} onChange={handleChange} />
                    </label>
                <label className="user-setting-field-and-label" htmlFor="password">
                    Password: <input name="password" type="password" onChange={handleChange} />
                    </label>
                <label className="user-setting-field-and-label" htmlFor="displayname">
                    Display Name: <input name="displayname" type="text" value={userInput.displayName} onChange={handleChange} />
                    </label>
                <label className="user-setting-field-and-label" htmlFor="iconurl">
                    <div>
                        <img src={userInput.iconUrl} />
                        Picture: 
                    </div>
                    <input name="iconurl" type="text" onChange={handleChange} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserSettings