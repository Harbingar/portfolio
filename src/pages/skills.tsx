import React from 'react';
import Nav from "../composants/nav";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";
import Skill from "../composants/skills.tsx";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Nav/>
      <NavMobile/>
      <Skill/>
      <Info/>
      

    </div>
  );
}

export default Skills;