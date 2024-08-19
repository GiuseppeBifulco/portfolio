import React from 'react'
import {Link} from 'react-scroll'

export default function NavHamburgerMenu({isOpen, toogleOpenMenu}) {
  return (
    <div>
         {/*Mobile Menu*/}
         <ul className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0f0e17] flex flex-col justify-center items-center'}>
         <li className="text-[#fffffe] hover:text-[#ff9900]"><Link onClick={toogleOpenMenu} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link onClick={toogleOpenMenu} to="about" smooth={true} duration={500}>About</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link onClick={toogleOpenMenu} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link onClick={toogleOpenMenu} to="work" smooth={true} duration={500}>Work</Link></li>
          <li className="text-[#fffffe] hover:text-[#ff9900]"><Link onClick={toogleOpenMenu} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  )
}
