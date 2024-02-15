import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../composants/nav";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";



const Home: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <NavMobile/>

      <Info/>
    </div>
  );
}

export default Home;