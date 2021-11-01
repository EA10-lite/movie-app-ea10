import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SwitchCamera } from '@material-ui/icons';

const Navbar = ()=> {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <SwitchCamera />
                        <p>Movies</p>
                    </Link>
                </div>
                <div className="nav">
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/movie"> Movies </Link> </li>
                        <li> <Link to="/tvshows"> TV shows </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;