import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
          <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/giuseppe-bifulco-9b2913168/">
          Linkedin<FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600">
          <a className="flex justify-between items-center w-full  text-gray-300" href="https://www.instagram.com/giuseppe_bifulco944/">
          Instagram<FaInstagram size={30}/>
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
          <a className="flex justify-between items-center w-full  text-gray-300" href="https://github.com/GiuseppeBifulco">
          Github<FaGithub size={30}/>
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
          <a className="flex justify-between items-center w-full  text-gray-300" href="https://www.facebook.com/profile.php?id=100008284770636">
          Facebook<FaFacebook size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
