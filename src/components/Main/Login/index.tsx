import { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() 
{
    const [userDetails, setUserDetails] = useState({
        email: "",
        displayName: "",
    })

    const handleChange = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name

        if(inputName == "email") {
            setUserDetails({...userDetails, email: inputValue})
        }
        if(inputName == "password") {
            setUserDetails({...userDetails, password: inputValue})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    E-Mail
                    <input type="email" name="email" required onChange={handleChange}/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" required onChange={handleChange}/>
                </label>
                <input type="submit" value="Login"/>
            </form>
            <p>Don't have an account?</p>
            <Link to="/signup"><button>Sign up instead</button></Link>
        </div>
    )
}

export default Login;