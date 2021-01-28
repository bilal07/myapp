import React, { Component } from 'react';


const Nav = () => {
    return (
        <div className="navbar">
            <div className="container">
                <a href="#" className="logo">Logo</a>
                <ul>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </ul>
            </div>
        </div>
    );
}

export default Nav;