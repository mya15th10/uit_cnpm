import React from 'react';
import './header.css'; 

function Header() {
    return(
        <div className="header-container">
            <div className="header-wrapper">
                <div className="menu-item market-overview">Market Overview</div>
                <div className="menu-item login">Login/Register</div>
                <div className="menu-item instructions">Instructions</div>
                <div className="menu-item contact">Contact</div>
                <div className="menu-item about">About</div>
                <img className="logo" src="https://via.placeholder.com/187x177" alt="Logo" />
                <img className="icon" src="https://via.placeholder.com/117x62" alt="Icon" />
                <div className="search-bar">
                    <div className="search-border"></div>
                    <div className="search-icon">
                        <div className="search-icon-inner"></div>
                        <div className="search-icon-outer"></div>
                    </div>
                    <div className="search-text">Search</div>
                </div>
            </div>
        </div>
    );
}

export default Header;