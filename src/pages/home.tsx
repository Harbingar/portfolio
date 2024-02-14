import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../composants/nav";
import Me from "../composants/home";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";


const Home: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <Me/>
      <Info/>
      <NavMobile/>
    </div>
  );
}

export default Home;