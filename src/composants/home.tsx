import React from 'react';
import Switch from "./inSearch";
import Me from "./me";

const Home: React.FC = () => {
    return (
      <div className="fixed w-full h-screen flex flex-col items-center justify-center overflow-auto overflow-x-hidden">
          <Switch/>
          <Me/>
      </div>
    );
  }
  
  

export default Home;