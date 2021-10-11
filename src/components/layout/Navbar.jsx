import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="nav-color">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">epiNotes</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar