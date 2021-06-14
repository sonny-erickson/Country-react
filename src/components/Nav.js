import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <NavLink exact to ="/" activeClassName="nav-active">
                Home
            </NavLink>
            <NavLink exact to ="/about" activeClassName="nav-active">
                About
            </NavLink>
            
        </div>
    );
};

export default Nav;