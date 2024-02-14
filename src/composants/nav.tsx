import React from 'react';
import { Link } from 'react-router-dom';


const Nav: React.FC = () => {
  return (
    <>
    <div className="fixed hidden md:block w-1/12 h-screen bg-bestBlack flex flex-col items-center justify-between z-50">
        <div className="w-full h-1/6 flex justify-center items-center">
            <img src="./Tsyben01.png" alt="TSyben" className="w-1/2 h-fit"/>
        </div>
        <div className="flex flex-col w-full h-4/6 justify-around">
            <button className="text-border text-xl text-bestWhite rotate-[-90deg] hover:text-border-high"><Link to="/works">Works</Link></button>
            <button className="text-border text-xl text-bestWhite rotate-[-90deg] hover:text-border-high"><Link to="/Skills">Skills</Link></button>
            <button className="text-border text-xl text-bestWhite rotate-[-90deg] hover:text-border-high"><Link to="/Contact">Contact</Link></button>
        </div>
        <div className="w-full h-1/6 flex justify-center items-center">
            <img src="./deco.png" alt="decoration" className="w-1/3 h-fit rotate-[45deg]" />
        </div>
    </div> 
    </>
  );
}

export default Nav;