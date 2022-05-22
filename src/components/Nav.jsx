import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
    return (
        <div className="header-wrapper">
            <img src='https://imgur.com/jHo4WKq.jpeg' className='profile-picture' alt='' />
            <h2>Mark Ryan</h2>
            <div>
                <nav className="nav-bar">
                    <Link to='/about'>About Me</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to={{ pathname: "https://docs.google.com/document/d/14UYEoV34NeDJd1QYzxLOtcQJiLDpAFmgvI1JzzhJNZI/edit?usp=sharing" }} target="_blank">Resume </Link>
                </nav>
            </div>
        </div>
    )
}

export default Nav