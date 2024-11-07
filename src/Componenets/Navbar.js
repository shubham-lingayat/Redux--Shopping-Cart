import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(<div>
    <div>
        <NavLink to="/">LOGO</NavLink>
    </div>
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart Logo</NavLink>
    </div>
        
    </div>);
}

export default Navbar;