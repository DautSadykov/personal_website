import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [isBurgerClicked, setIsBurgerClicked] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    function handleToggleNavbar() {
        setIsBurgerClicked ((prevIsBurgerClicked) => !prevIsBurgerClicked)
    }

    function hideNavbarDropdown() {
        setIsBurgerClicked(false)
    }

    function handleResize() {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        windowWidth > 870 && hideNavbarDropdown()
        return() => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return(
        <div className="header">
            <div className="logo">
                <img src="my_logo.png" alt="" />
            </div>
            <div onClick={handleToggleNavbar} className="toggle_navbar_button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                {/* <img src="cross.png" alt="" /> */}
            </div>
            <nav className={`navbar ${isBurgerClicked ? 'clicked' : 'unclicked'}`}>
                <ul>
                    <li className="clickable">HOME</li>
                    <li className="clickable">ABOUT</li>
                    <li className="clickable">RESUME</li>
                    <li className="clickable">PORTFOLIO</li>
                    <li className="clickable">BLOG</li>
                    <li className="clickable">CONTACT</li>
                    <li className="separator">|</li>
                    <li className="phone_number">
                        <img className="phone_icon" src="phone_icon.png" alt="" />
                        <div>+7 922 351-90-45</div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}