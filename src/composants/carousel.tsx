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
      <div className="absolute top-10 text-center">
        <div className="flex flex-row justify-center items-center">
            <p>Statut : </p>
            <div className={`w-4 h-4 rounded mx-1 ${getStatusColor(worksData[currentIndex].status)}`}></div>
        </div>
        <h1 className="text-2xl font-bold text-border text-bestGrey">{worksData[currentIndex].title}</h1>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="scale-75">
          {worksData.length > 0 && (
            <div key={worksData[currentIndex].id} className="w-full flex flex-col items-center justify-between">
              <div className="h-1/2 relative z-10" style={{ transform: 'translateY(10%)' }}>
                <div className="flex flex-row justify-center">
                  <img className="w-1/3 rounded-md border-2 border-gray-500 hover:scale-110 transition duration-200" src={worksData[currentIndex].image1} alt="screen" />
                  <div className="w-1/4 flex flex-col pl-3">
                    <h1 className="font-bold text-xl">Description</h1>
                    <p>{worksData[currentIndex].description}</p>
                  </div>
                </div>
              </div>
              <div className="h-1/2 relative hover:z-20" style={{ transform: 'translateY(-10%)' }}>
                <div className="flex flex-row justify-center">
                    <div className="w-1/3 flex flex-col justify-center items-center relative" style={{ transform: 'translateY(10%) translateX(5%)' }}>
                        <a className="border-2 rounded px-3 py-1 text-xl text-bestWhite border-bestWhite hover:underline hover:border-none hover:scale-110 transition duration-200 ease-in-out" href={worksData[currentIndex].link}>Visit Now</a>
                    </div> 
                    <img className="w-1/3 rounded-md border-2 border-gray-500 hover:scale-110 transition duration-200" src={worksData[currentIndex].image2} alt="screen" />
                </div>
              </div>
            </div>
          )}
        </div>
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
