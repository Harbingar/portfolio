import React from 'react';

const Skills: React.FC = () => {
    return (
        <div className="w-fit h-screen flex flex-row text-white">
            <div className="md:w-1/12 h-screen">

            </div>
            <div className="md:w-10/12 sm:w-max h-fit flex flex-col items-center justify-center md:px-10 overflow-y-scroll">
              <div className="flex flex-col items-center">
                <div className="sm:4/5 sm:pt-10 flex flex-col items-center text-border text-bestGrey mb-14">
                  <h1 className="text-4xl">THOMAS SYBEN</h1>
                  <h2 className="text-3xl">Front-end Junior</h2>
                </div>
                <div className="grid grid-rows-3 md:grid-flow-col gap-4 w-3/4">
                  <div className="flex flex-row items-center">
                      <img className="w-20 h-20" src="html.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center">HTML</h1>
                        <img src="4-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="w-20 h-20" src="css.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center">CSS</h1>
                        <img src="4-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="w-20 h-20" src="tailwind.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center">Tailwind CSS</h1>
                        <img src="3-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="w-20 h-20" src="javascript.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center">Javascript</h1>
                        <img src="3-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="w-20 h-20" src="typescript.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center">Typescript</h1>
                        <img src="2-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="w-20 h-20" src="react.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center">REACT</h1>
                        <img src="2-5.png" alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/12 h-screen">
            
            </div>
        </div>
    );
}

export default Skills;
