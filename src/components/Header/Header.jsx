import React, { useState, useEffect } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { MdAccountCircle } from 'react-icons/md';
import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateUser = (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    };

    auth.onAuthStateChanged(updateUser);

    return (
        <nav className="navbar navbar-expand-md bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="/LandingPage">
                    <img src="./logo-cor.png" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-size-sm offcanvas-end offcanvas-width" tabIndex="-1" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="navbarOffcanvasLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav navmargin">
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/labinput">Test</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item" style={(user || loading) ? { marginRight: loading ? '2.4rem' : '-3rem' } : {}}>
                                {loading ? (
                                    <div className="d-flex justify-content-center mt-3">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : user ? (
                                    <img src={user.photoURL} id="acc-photo" alt="Profile" />
                                ) : (
                                    <a className="nav-link" href="/login">
                                        <MdAccountCircle /> Login
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        // <nav className="navbar navbar-expand-md bg-white">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="/LandingPage">
        //             <img src="./logo-cor.png" />
        //         </a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav navmargin">
        //                 <li className="nav-item me-3">
        //                     <a className="nav-link" href="/">Home</a>
        //                 </li>
        //                 <li className="nav-item me-3">
        //                     <a className="nav-link" href="/labinput">Test</a>
        //                 </li>
        //                 <li className="nav-item me-3">
        //                     <a className="nav-link" href="/about">About</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/login"> <MdAccountCircle /> Login</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav >
    );
}

export default Header;
