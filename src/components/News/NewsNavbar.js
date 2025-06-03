import React from 'react';
import { Link } from 'react-router-dom'

// Importing CSS....
import './news.css'

const NewsNavbar = () => {
    return (
        <nav className="navbar nav_style navbar-expand-lg Navbar_container sticky-top">
            <div className="container container_width">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0 mx-auto"> {/* `mx-auto` to center navbar items */}
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NewsNavbar
