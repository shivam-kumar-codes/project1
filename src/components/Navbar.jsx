
import React, { useState } from 'react';
import './Navbar.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="Header">
      <img  src="https://s3-alpha-sig.figma.com/img/f9cc/c444/a82f854f01e0200063607dd2ef26f69c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zg586s7gjjq7poe21GX4NM73vPRI3RwFuFPxYuc1mDCSMo9whrIEixHKmzml2h99go2fOhe9w32z8YfLokXEtIfGJfNlAgsXlwjQfGz6Y8xWpLoxvIb1tobdEQtbidiSD-v9su9C~xG8dx3cZhDp~btfGIO-ov6tdSgW3F9drgg1uI4HzFglMZbcq-mMMVazcjyjkKsmXejpxpJFHO5w354Ax0g4~1fnTDjbeekkl8bODu0DIpFb-Wpn81KDSa9FhA7OEWQnsHaU6Y2iBMGtUBb9iL6bNB8WWWp4Tw0Zs1fOD4g~zhVT1sDA9Ep-2zqwwvTEshMUkMdgdthMccQOsw__" alt="Logo" className='w-[50%] md:w-40 object-cover' />
      <div className={`Menu ${showMenu ? 'show' : ''}`}>
        <a href="./LandingPage" className='mx-1 p-3 border-[#F3B03D] border-2 rounded-full text-black bg-white hover:bg-[#F3B03D] hover:text-white sm:w-full'>Home</a>
        <a href="./LandingPage" className='mx-1 p-3 border-[#F3B03D]  border-2 rounded-full text-black bg-white hover:bg-[#F3B03D] hover:text-white sm:w-full'>About</a>
        <a href="/FAQ" className='mx-1 p-3 border-[#F3B03D] border-2 rounded-full text-black bg-white hover:bg-[#F3B03D] hover:text-white sm:w-full'>Services</a> 
        <a href="./Footer" className='mx-1 p-3  border-[#F3B03D]  border-2 rounded-full  text-black   bg-white hover:bg-[#F3B03D]  hover:text-white sm:w-full'>Contact</a>
      </div>      
      <div className="MenuToggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
}

export default Header;
