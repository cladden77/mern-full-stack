import React from 'react';
import "./Home.css";
import { Outlet, Link, useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    return (
        <section className="home-container">
            <div className="content-container">
                <header className="content-header">
                    <div className="logo">Codebrew</div>
                    {location.pathname === "/signin" ? (
                        <p>Don't have an account? <Link className="link" to="/">Sign Up</Link></p>
                    ) : (
                        <p>Already have an account? <Link className="link" to="/signin">Sign In</Link></p>
                    )};
                    
                </header>
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>

            <div className="image-container">
            </div>
        </section>
    )
}

export default Home