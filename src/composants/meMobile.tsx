import React from 'react';
import Switch from "./inSearch";


const MeMobile: React.FC = () => {
  return (

    <>
    <div className="md:hidden w-max h-screen flex flex-col justify-around items-center">
        <Switch/>
        <div className="flex flex-col items-center text-bestWhite text-border">
            <h1 className="text-3xl py-2">Thomas Syben</h1>
            <img src="./pp-profil.jpg" alt="pp" className="w-3/4 rounded-xl" />
            <h2 className="text-4xl py-2">Front-end Junior</h2>
            <div className='flex flex-row justify-center items-center text-border text-bestDark'>
                <h2 className="text-2xl py-2">Liège, Belgium</h2>
                <img className="w-1/6" src="./belgium.png" alt="belgium" />
            </div>
        </div>
        <button className="border-2 border-bestWhite text-bestWhite text-border rounded-xl px-2 my-5">Download CV</button>

    </div> 
    </>
  );
}

export default MeMobile;