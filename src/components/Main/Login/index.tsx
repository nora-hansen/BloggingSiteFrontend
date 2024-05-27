import { useContext, useState } from 'react';
import './Login.css'
import { Link, Navigate } from 'react-router-dom';
import env from '../../../environment';
import { genSaltSync, hashSync } from "bcrypt-ts";
import { UserContext } from '../../../App';

function Login() 
{
    const userContext = useContext(UserContext)

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const [successfulLogin, setSuccessfulLogin] = useState<boolean>(false)

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

        // TODO: IMPLEMENT LATER!! Passwords in db are currently not hashed, 
        // so this will cause current users to not be able to login
        //              vvvvvv
        // const salt = genSaltSync(10);
        // const hashedPassword = hashSync(userDetails.password, salt);
        // setUserDetails({...userDetails, password: hashedPassword})

        fetch(`${env.url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
            })
                .then(response => response.json())
                .then(data => {
                    userContext.setBearer(data.token)
                    localStorage.setItem("bearer", data.token)
                })
                // .then(async () => {
                //     if (userContext.bearer !== "") {
                //         const response = await fetch(`${env.url}/users?email=${userDetails.email}`);
                //         const data = await response.json();
                //         userContext.setUser(data[0]);
                //     }
                // })
                .catch(error => {
                    console.error(error)
                })
    }

    if (userContext.bearer !== "")
    {
        fetch(`${env.url}/users?email=${userDetails.email}`)
            .then(response => response.json())
            .then(data => userContext.setUser(data[0]))
        return <Navigate to="/" />
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