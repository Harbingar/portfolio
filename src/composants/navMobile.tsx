import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuTranslateClass = isMenuOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <div className="w-1/2 md:hidden h-screen flex overflow-hidden">
      <div className="h-screen bg-bestBlack flex flex-col items-center justify-between z-50">
        <div className="h-full flex flex-col items-center justify-between">
          <img src="./TS.png" alt="TS" />
          <img src="./menu.png" alt="Menu" onClick={toggleMenu} className="cursor-pointer" />
          <img className="rotate-45 w-2/3 mb-2" src="deco.png" alt="decoration" />
        </div>
      </div>

      <div className={`w-3/4 h-screen bg-bestBlack z-40 flex flex-col items-center justify-center ${menuTranslateClass} transition-transform duration-500 ease-in-out fixed`}>
        <Link className="text-border text-2xl text-bestWhite" to="/Works">Works</Link>
        <img src="cross.png" alt="Séparateur" className="rotate-90" />
        <Link className="text-border text-2xl text-bestWhite" to="/Skills">Skills</Link>
        <img src="cross.png" alt="Séparateur" className="rotate-90" />
        <Link className="text-border text-2xl text-bestWhite" to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavMobile;
