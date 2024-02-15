import React from 'react';
import Nav from "../composants/nav";
import Me from "../composants/home";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";
import MeMobile from "../composants/meMobile";


const Home: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <Me/>
      <Info/>
      <NavMobile/>
      <MeMobile/>
    </div>
  );
}

export default Home;