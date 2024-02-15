import React from 'react';

const Skills: React.FC = () => {
    return (
        <div className="w-fit h-screen flex flex-row text-white items-center">
            <div className="md:w-1/12 h-screen">

            </div>
            <div className="md:w-10/12 sm:w-max h-fit flex flex-col items-center justify-center md:px-10">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center text-border text-bestGrey my-5">
                  <h1 className="md:text-4xl text-3xl font-bold">THOMAS SYBEN</h1>
                  <h2 className="md:text-3xl text-2xl font-bold">Front-end Junior</h2>
                </div>
                <div className="grid grid-rows-3 md:grid-flow-col gap-4 w-3/4">
                  <div className="flex flex-row items-center">
                      <img className="md:w-20 w-12" src="html.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center font-bold">HTML</h1>
                        <img src="4-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="md:w-20 w-12" src="css.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center font-bold">CSS</h1>
                        <img src="4-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="md:w-20 w-12" src="tailwind.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center font-bold">Tailwind CSS</h1>
                        <img src="3-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="md:w-20 w-12" src="javascript.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center font-bold">Javascript</h1>
                        <img src="3-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="md:w-20 w-12" src="typescript.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center font-bold">Typescript</h1>
                        <img src="2-5.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center">
                      <img className="md:w-20 w-12" src="react.png" alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-center font-bold">REACT</h1>
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
