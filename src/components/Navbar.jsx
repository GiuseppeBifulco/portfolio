import React, { useState } from "react";
import Logo from "../assets/react.svg";
import { CiMenuBurger } from "react-icons/ci";
import NavHamburgerMenu from '../components/NavHamburgerMenu'
import { FaTimes } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import {Link} from 'react-scroll'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toogleOpenMenu = () => {
        setIsOpen(!isOpen)
    } 

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0f0e17] text-[#fffffe]">
      <div>
        <img src={Logo} alt="Logo IMG" />
      </div>
      <div className="hidden md:flex">
        {/*Menu*/}
        <ul className="flex items-center space-x-4">
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link to="work" smooth={true} duration={500}>Work</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>

      {/*Hamburger Menu*/}
      <div className="md:hidden z-10"  onClick={toogleOpenMenu}>
        {!isOpen ? <CiMenuBurger/> : <FaTimes />}
        
      </div>
      {/*Mobile Menu*/}
      {
        isOpen ? <NavHamburgerMenu isOpen={isOpen} toogleOpenMenu={toogleOpenMenu}/> : null
      }

      {/*Social icons*/}
      <SocialIcons/>
    </div>
  );
}
