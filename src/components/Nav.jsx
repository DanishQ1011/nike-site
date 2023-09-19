import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className='flex-1 flex justify-center items-center hover:text-black gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        
        {/* This is for the hamburger menu 👇🏼*/}

        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
        <ul
          className={`${
            menuVisible ? "block" : "hidden"
          } lg:hidden absolute top-16 right-5 bg-gray-200 py-4 px-3 rounded-md shadow-lg`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal font-medium font-montserrat text-lg block py-2 px-2"
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className="leading-normal font-medium font-montserrat rounded-md text-xl">
            <a className="py-2 px-2 text-coral-red font-bold " href="/">
              Sign in
            </a>
            <br />
            <a
              className="py-2 px-2 mt-8 rounded-lg font-bold text-coral-red"
              href="/"
            >
              Explore now
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;






