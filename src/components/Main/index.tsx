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
import Users from './Users';
import Drafts from './Drafts';
import Post from './Post';
import Signout from './Signout';
import Friends from './Friends';
import UserSettings from './UserSettings';
import NotFound from './NotFound';
function Main()
{
    const location = useLocation()
    const [bgColor, setBgColor] = useState<string>("#eeeeee")

    useEffect(() => {
        if (!location.pathname.startsWith('/user')) 
            {
                setBgColor("#eeeeee")
            }
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
                    path="/post/:postId"
                    element={<Post />}
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
                    path="/user/:userId/*"
                    element={<Profile 
                        setBgColor={setBgColor}
                    />}
                />
                <Route
                    path="/edit-profile"
                    element={<EditProfile />}
                />
                <Route
                    path="/all-users"
                    element={<Users />}
                />
                <Route
                    path="/drafts"
                    element={<Drafts />}
                />
                <Route
                    path="/signout"
                    element={<Signout />}
                />
                <Route
                    path="/friends"
                    element={<Friends />}
                />
                <Route
                    path="/settings"
                    element={<UserSettings />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </main>
    );
}

export default Main;