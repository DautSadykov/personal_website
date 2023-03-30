import React from "react";

export default function Navbar() {
    return(
        <div className="header">
            <div className="logo">
                <img src="my_logo.png" alt="" />
            </div>
            <div className="toggle_navbar_button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span> 
            </div>
            <nav className="navbar">
                <ul>
                    <li className="clickable">HOME</li>
                    <li className="clickable">ABOUT</li>
                    <li className="clickable">RESUME</li>
                    <li className="clickable">PORTFOLIO</li>
                    <li className="clickable">BLOG</li>
                    <li className="clickable">CONTACT</li>
                    <li>|</li>
                    <li className="phone_number">
                        <img className="phone_icon" src="phone_icon.png" alt="" />
                        <div>+7 922 351-90-45</div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}