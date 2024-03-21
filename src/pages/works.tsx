import React from 'react';
import Nav from "../composants/nav";
import State from "../composants/infoSlide";
import NavMobile from "../composants/navMobile";
import Carousel from "../composants/carousel";

const Works: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <NavMobile/>
      <Carousel/>
      <State/>
    </div>
  );
}

export default Works;
