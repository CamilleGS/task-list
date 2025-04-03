import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import React from "react";
import Home from './pages/home'
import Task from './pages/task'


function myRoutes(){


    return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/task" element={<Task/>}/>
                </Routes>
            </Router>
    )
}

export default myRoutes
