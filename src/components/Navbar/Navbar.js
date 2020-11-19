import React from 'react'
import {NavbarStyledWrapper} from './Navbar.style'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <NavbarStyledWrapper>
           <Link to="/"> HOME </Link> 


        </NavbarStyledWrapper>
    )
}