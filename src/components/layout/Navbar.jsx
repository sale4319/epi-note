import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-color">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">epiNotes</Link>
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to="/favorites"><b>Favorites</b></NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar