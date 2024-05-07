import { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

function SignUp()
{
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        displayName: "",
        iconUrl: ""
    })

    const handleChange = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name

        if(inputName == "email") {
            setUserDetails({...userDetails, email: inputValue})
        }
        if(inputName == "displayname") {
            setUserDetails({...userDetails, displayName: inputValue})
        }
        if(inputName == "password") {
            setUserDetails({...userDetails, password: inputValue})
        }
        if(inputName == "iconUrl") {
            setUserDetails({...userDetails, iconUrl: inputValue})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
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
                    <input type="text" name="text" onChange={handleChange}/>
                </label>
                <input type="submit" value="Create account"/>
            </form>
            <p>Already have an account?</p>
            <Link to="/login"><button>Login instead</button></Link>
        </div>
    )
}

export default SignUp;