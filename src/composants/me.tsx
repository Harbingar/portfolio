import React from 'react';

const Me: React.FC = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Thomas_Syben_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <button 
            className="text-bestWhite border-2 border-transparent rounded-xl px-2 my-5 underline hover:no-underline hover:text-bestWhite hover:text-border hover:border-bestWhite transition ease-in-out duration-300" 
            style={{ transitionProperty: 'border-color, box-shadow', transitionDuration: '200ms' }}
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
        <div className="w-1/5">
          <img className="rounded-2xl" src="pp-profil.jpg" alt="Me" />
        </div>
      </div>
    </>
  );
}

export default Me;
