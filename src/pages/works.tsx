import React from 'react';
import Nav from "../composants/nav";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";
import Carousel from "../composants/carousel"; // Modifié ici

const Works: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <NavMobile/>
      <Carousel/>
      <Info/>
    </div>
  );
}

export default Works;
