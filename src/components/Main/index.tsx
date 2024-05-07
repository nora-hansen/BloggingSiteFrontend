import Home from './Home';
import './Main.css';

import { Routes, Route } from 'react-router-dom'

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
                    element={<p>All</p>}
                />
                <Route
                    path="create"
                    element={<p>Create</p>}
                />
            </Routes>
        </main>
    );
}

export default Main;