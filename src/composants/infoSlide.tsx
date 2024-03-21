import React from 'react';
import { useSharedCarouselState } from './state';
import { worksData } from '../interfaces/worksInterface';

const InfoSlide: React.FC = () => {
    const { currentIndex } = useSharedCarouselState();

    return (
        <div className="hidden md:block">
            <div className="fixed top-0 right-0 h-screen w-1/12 bg-bestBlack flex flex-col items-center justify-center z-50">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold text-border">{worksData[currentIndex].id}</h1>
                    <h1 className="text-xl font-bold text-border">-</h1>
                    <h1 className="text-xl font-bold text-border">{worksData.length}</h1>
                </div>
            </div> 
        </div>
    );
};

export default InfoSlide;
