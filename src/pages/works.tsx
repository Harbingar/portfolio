import React from 'react';
import Nav from "../composants/nav";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";
import Work from "../composants/work";



const Works: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <NavMobile/>
      <Work/>
      <Info/>
    </div>
  );
}

export default Works;