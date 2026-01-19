import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/idea-generator">Idea Generator</NavLink></li>
                <li><NavLink to="/writing-assistant">Writing Assistant</NavLink></li>
                <li><NavLink to="/analytics">Analytics</NavLink></li>
                <li><NavLink to="/auth">Auth</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
