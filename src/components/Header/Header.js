import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">React Movies</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies/page/1">Movies</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/serials">Serials</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tvshow">TV Show</Link>
                    </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;