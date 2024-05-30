import { useState } from 'react';
import './SignUp.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

import env from '../../../environment'

function SignUp()
{
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        displayName: "",
        iconUrl: ""
    })

    const handleChange = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name

        if(inputName === "email") {
            setUserDetails({...userDetails, email: inputValue})
        }
        if(inputName === "displayname") {
            setUserDetails({...userDetails, displayName: inputValue})
        }
        if(inputName === "password") {
            setUserDetails({...userDetails, password: inputValue})
        }
        if(inputName === "iconurl") {
            setUserDetails({...userDetails, iconUrl: inputValue})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch(`${env.url}/users`,   {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
            })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error(`${response.status}`)
                }
                navigate('/login')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <div className="sign-up-page">
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <label>
                    E-Mail*
                    <input type="email" name="email" required onChange={handleChange}/>
                </label>
                <label>
                    Display Name*
                    <input type="text" name="displayname" required onChange={handleChange}/>
                </label>
                <label>
                    Password*
                    <input type="password" name="password" required onChange={handleChange}/>
                </label>
                <label>
                    Picture (link, will be more advanced later)
                    <input type="text" name="iconurl" onChange={handleChange}/>
                </label>
                <input type="submit" value="Create account"/>
            </form>
            <p>Already have an account?</p>
            <Link to="/login"><button>Login instead</button></Link>
        </div>
    )
}

export default SignUp;