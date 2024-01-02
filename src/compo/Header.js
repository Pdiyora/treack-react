import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="current-header">
                <nav className="navbar navbar-expand-lg navigation-warp wow slideInLeft">
                    <div className="container">
                        <div className="logo-detail">
                            <a className="navbar-brand" href="#"><img src="img/logo.svg" alt="img" /></a>
                            <a className="logo-name">Treack</a>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto d-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="home.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="restorant.html">Restaurant</a>
                                </li>
                                <li className="nav-item">
                                    <a href="agency.html">Agency</a>
                                </li>
                                <li className="nav-item">
                                    <a href="service.html">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="travel.html">Travel</a>
                                </li>
                                <li className="nav-item login">
                                    <a className="nav-link" href="#login">Login</a>
                                </li>
                                <li className="nav-item ma-btn">
                                    <button className="main-btn">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
