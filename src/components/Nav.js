import React, { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar">
            <div className="container">
                <a href="#" className="logo">Logo</a>
                <ul>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Nav;