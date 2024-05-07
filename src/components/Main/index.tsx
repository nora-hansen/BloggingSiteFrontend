import Home from './Home';
import './Main.css';

import { Routes, Route } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import All from './All';

function Main()
{
    return(
        <main>
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
                    path="create"
                    element={<p>Create</p>}
                />
                <Route
                    path="signup"
                    element={<SignUp />}
                />
                <Route
                    path="login"
                    element={<Login />}
                />
            </Routes>
        </main>
    );
}

export default Main;