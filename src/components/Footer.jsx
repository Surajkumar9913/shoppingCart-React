import React from 'react'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-blue-950 py-8 flex justify-around items-center'>
       <a href='https://surajprofessionalportfolio.netlify.app/' target="_blank" className='text-yellow-50 text-2xl font-pacifico '>  Designed By <span className='text-yellow-400'>Suraj . . .</span> </a>
       <div className="flex justify-center space-x-4">
      <a href="https://www.instagram.com/surajkumaryuva/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 hover:text-pink-700" size={30} />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100016106644133" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-500 hover:text-blue-700" size={30} />
      </a>
      <a href="https://github.com/Surajkumar9913/" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-blue-500 hover:text-gray-900" size={30} />
      </a>
      <a href="https://www.linkedin.com/in/suraj-kumar2000/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-600 hover:text-blue-800" size={30} />
      </a>
    </div>
    </div>
  )
}

export default Footer
