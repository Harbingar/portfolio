import React from 'react';


const Me: React.FC = () => {
  return (

    <>
    <div className="w-max flex flex-row justify-center items-center text-border text-bestGrey">
        <div className="flex flex-col h-1/2 font-bold items-end justify-around mr-5">
            <h1 className="text-6xl my-5">Thomas Syben</h1>
            <h2 className="text-4xl my-5">Front-end Junior</h2>
            <div className="flex flex-row items-center my-5">
                <h3 className="text-2xl">Liège, Belgium</h3>
                <img className="w-8 px-1" src="./belgium.png" alt="Belgium" />
            </div>
            <button className="border-2 border-bestWhite text-bestWhite text-border rounded-xl px-2 my-5">Download CV</button>
        </div>
        <div className="w-1/5">
            <img className="rounded-2xl" src="pp-profil.jpg" alt="Me" />
        </div>
    </div> 
    </>
  );
}

export default Me;