import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li className="logo"><a href="#">Creative Mind Agency</a></li>
                <li className="item"><a href="#">Home</a></li>
                <li className="item"><a href="#">About</a></li>
                <li className="item has-submenu">
                    <a tabindex="0">Services</a>
                    <ul className="submenu">
                        <li className="subitem"><a href="#">Design</a></li>
                        <li className="subitem"><a href="#">Development</a></li>
                        <li className="subitem"><a href="#">SEO</a></li>
                        <li className="subitem"><a href="#">Copywriting</a></li>
                    </ul>
                </li>
                <li className="item has-submenu">
                    <a tabindex="0">Plans</a>
                    <ul className="submenu">
                        <li className="subitem"><a href="#">Freelancer</a></li>
                        <li className="subitem"><a href="#">Startup</a></li>
                        <li className="subitem"><a href="#">Enterprise</a></li>
                    </ul>
                </li>
                <li className="item"><a href="#">Blog</a></li>
                <li className="item"><a href="#">Contact</a>
                </li>
                <li className="item button"><a href="#">Log In</a></li>
                <li className="item button secondary"><a href="#">Sign Up</a></li>
                <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li>
            </ul>
        </nav>
    )
}

export default Navbar
