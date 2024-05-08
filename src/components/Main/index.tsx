import Home from './Home';
import './Main.css';

import { Routes, Route, useLocation } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import All from './All';
import Create from './Create';
import Profile from './Profile';
import { useEffect, useState } from 'react';

function Main()
{
    const location = useLocation()
    const [bgColor, setBgColor] = useState<string>("#FFFFFF")

    useEffect(() => {
        if (location.pathname != "/user")setBgColor("#FFFFFF")
    }, [location])

    return(
        <main
            style={{backgroundColor: bgColor ? bgColor : "#FFFFFF"}}
        >
            <Routes>
                <Route 
                    path="/"
                    element={<Home />}
                />
                <Route 
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/all"
                    element={<All />}
                />
                <Route
                    path="/create"
                    element={<Create />}
                />
                <Route
                    path="/signup"
                    element={<SignUp />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="user"
                    element={<Profile 
                        setBgColor={setBgColor}
                    />}
                />
            </Routes>
        </main>
    );
}

export default Main;