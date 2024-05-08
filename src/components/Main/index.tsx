import Home from './Home';
import './Main.css';

import { Routes, Route, useLocation } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import All from './All';
import Create from './Create';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import EditProfile from './EditProfile';

function Main()
{
    const location = useLocation()
    const [bgColor, setBgColor] = useState<string>("#eeeeee")

    useEffect(() => {
        if (location.pathname != "/user") setBgColor("#eeeeee")
    }, [location])

    return(
        <main
            style={{backgroundColor: bgColor ? bgColor : "#eeeeee"}}
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
                <Route
                    path="edit-profile"
                    element={<EditProfile />}
                />
            </Routes>
        </main>
    );
}

export default Main;