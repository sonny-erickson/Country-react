import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>Logo</h3>
            </div>
            <div className="nav">
                <NavLink exact to ="/" activeClassName="nav-active">
                    Home
                </NavLink>
                <NavLink exact to ="/about" activeClassName="nav-active">
                    About
                </NavLink>
            </div>
        </div>
    );
};

export default Header;