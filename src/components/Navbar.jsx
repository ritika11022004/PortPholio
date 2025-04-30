import React, { useState } from "react";
import img1 from "../images/gibli_nav_img.png";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import {Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"Achievements"
    },
    {
      id:3,
      text:"Projects"
    },
    {
      id:5,
      text:"Certifications"
    },
    {
      id:6,
      text:"Contact"
    },
  ]
  return (
    <>
      <div className="max-w-screen-2xl container fixed top-0 left-0 right-0 bg-white mx-auto mt-2 px-4 md:px-10">
        <div className="flex  shadow-md justify-between items-center ">
          <div className="flex  space-x-2 item-center mb-1">
            <img src={img1} className="w-13 h-13 rounded-full" alt="" />
            <h1 className="text-xl font-semibold cursor-pointer items-center justify-center">
              Ritika <span className="text-2xl text-green-500">Sahu</span>
              <p className="text-sm"> Web developer</p>
            </h1>
          </div>
          {/* LAPTOP VIEW */}
          <div>
            <ul className="hidden md:flex space-x-8 text-lg mr-2">
              {
                navItems.map(({id, text}) => (
                  <li key={id} className=" hover:text-green-500 cursor-pointer">
                    <Link to={text}
                    smooth ={true}
                    duration ={500}
                    offset={-70}
                    activeClass="active"
                    >
                    {text}
                    </Link>
                    </li>
                ))
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <RxCross2 size={24} /> : <IoMenu size={24} />}
            </div>
          </div>
        </div>
        {/*  mobile navbar */}
        {menu && (
          <div className="flex justify-between items-center w-full px-6 py-4 fixed top-13 bg-transparent z-50">
            <div className="w-1/2"></div>
            <div className="w-1/2 justify-end backdrop-blur py-2 rounded-lg"> 
            <ul className="flex flex-col  md:hidden space-y-4 justify-center items-center ">
            {navItems.map(({id, text}) => (
                  <li key={id} className="font-semibold text-xl hover:text-green-500 cursor-pointer" >
                    <Link to={text}
                    smooth ={true}
                    duration ={500}
                    offset={-70}
                    activeClass="active"
                    >
                      <div onClick={() => setMenu(!menu)}>
                      {text}
                      </div>
                     
                    </Link>
                    </li>
                ))
              }
            </ul></div>
           
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
