import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu=()=>{
    return(
        <>
             <NavLink exact="active_class" to="/">About us</NavLink>
             <NavLink exact="active_class" to="/contact">Contact Us</NavLink>
             <NavLink exact="active_class" to="/user">User</NavLink>
        
        
        
        </>
    );

};
export default Menu ;