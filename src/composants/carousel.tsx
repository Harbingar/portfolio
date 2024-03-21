import React, { useState } from 'react';
import { worksData } from '../interfaces/worksInterface';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstItem = currentIndex === 0;
        const newIndex = isFirstItem ? worksData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastItem = currentIndex === worksData.length - 1;
        const newIndex = isLastItem ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getStatusColor = (status: string): string => {
        switch (status) {
        case "Online":
            return "bg-green-500";
        case "Offline":
            return "bg-red-500";
        case "Conflict":
            return "bg-gray-500";
        case "In Progress":
            return "bg-purple-500";
        default:
            return "bg-gray-200";
        }
    };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex flex-row justify-center items-center">
              <p className="text-border text-bestGrey font-bold">Statut : </p>
              <div className={`w-4 h-4 rounded mx-1 ${getStatusColor(worksData[currentIndex].status)}`}></div>
          </div>
          <a href={worksData[currentIndex].link} className="text-5xl font-bold text-border text-bestGrey hover:scale-110 transition duration-200 ease-in-out">{worksData[currentIndex].title}</a>
        </div>
          {worksData.length > 0 && (
            <div key={worksData[currentIndex].id} className="w-full h-2/5 flex flex-col items-center justify-between">
              <div className="flex flex-row w-1/2 h-full justify-center">
                <div className="flex flex-col w-1/2 h-full mr-5">
                  <a href={worksData[currentIndex].link}><img className="rounded-md border-2 border-gray-500 max-w-full hover:scale-110 transition duration-200" src={worksData[currentIndex].image1} alt="screen"/></a>
                  <div className="flex flex-col h-full justify-stretch">
                    <div className="flex flex-row items-center justify-between py-2">
                      <h2 className="text-xl font-bold text-border text-bestGrey">Description</h2>
                      <div className="flex flex-row h-8">
                        <img className="px-1" src="react.png" alt="react" />
                        <img className="px-1" src="tailwind.png" alt="tailwind" />
                        <img className="px-1" src="typescript.png" alt="typescript" />
                      </div>
                    </div>
                    <p className="text-xs">{worksData[currentIndex].description}</p>
                  </div>
                </div>
                <div className="flex flex-col h-full w-fit items-center justify-center">
                  <img className="rounded-md border-2 border-gray-500 max-h-full object-contain hover:scale-110 transition duration-200" src={worksData[currentIndex].image2} alt="screen"/>
                </div>
              </div>
            </div>
          )}
      </div>
      
      <div className="absolute bottom-5 flex items-center justify-center w-full px-4">
        <div className="flex items-center justify-between w-full max-w-screen-md">
          <button onClick={goToPrevious} className="z-10">←</button>
          <div className="flex gap-2">
            {worksData.map((item, index) => (
              <button
                key={item.id}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button onClick={goToNext} className="z-10">→</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
