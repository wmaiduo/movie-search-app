import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand text-white text-lg brand-text" href="#">Movie Series Info</a>
                </div>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-blick mr-4">
                        <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
