/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

// Importing Custom Components....
import Home from './components/home/Home.js';
import Login from './components/auth/Login.js';
import SignUp from './components/auth/SignUp.js';
import Dashboard from './components/Dashbord/Dashboard.js';
import News from './components/News/News.js';
import About_Us from './components/TermConditions/About_Us.js';
import Contact_Us from './components/TermConditions/Contact_Us.js';
import Term_Of_Use from './components/TermConditions/Term_Of_Use.js';
import Privacy_Policy from './components/TermConditions/Privacy_Policy.js';
import Error from './components/Error/Error.js';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/news' element={<News />} />
                <Route path='/about-us' element={<About_Us />} />
                <Route path='/contact-us' element={<Contact_Us />} />
                <Route path='/term-of-use' element={<Term_Of_Use />} />
                <Route path='/privacy-policy' element={<Privacy_Policy />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Routes>
                <Route exact path="/general" element={<News key="general" pagesize={6} category={"general"} />} />
                <Route exact path="/business" element={<News key="business" pagesize={6} category={"business"} />} />
                <Route exact path="/entertainment" element={<News key="entertainment" pagesize={6} category={"entertainment"} />} />
                <Route exact path="/health" element={<News key="health" pagesize={6} category={"health"} />} />
                <Route exact path="/science" element={<News key="science" pagesize={6} category={"science"} />} />
                <Route exact path="/sports" element={<News key="sports" pagesize={6} category={"sports"} />} />
                <Route exact path="/technology" element={<News key="technology" pagesize={6} category={"technology"} />} />
            </Routes>
        </div>
    );
}

export default App;
