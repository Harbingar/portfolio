import React from 'react';

const Work: React.FC = () => {
    return (
        <div className="w-screen h-screen flex flex-row text-white items-center">
            <div className="md:w-1/12 h-screen"></div>
            <div className="w-10/12 h-fit flex flex-col items-center justify-center">
                <div className="w-full flex flex-col items-center justify-between text-white">
                    <div className="flex flex-row">
                        <p>Statut :</p>
                        <div></div>
                    </div>
                    <div className="h-1/2 relative z-10" style={{ transform: 'translateY(5%)' }}>
                        <div className="flex flex-row justify-center">
                            <img className="w-1/3 rounded-md border-2 border-bestGrey" src="test.png" alt="screen" />
                            <div className="w-1/4 flex flex-col">
                                <h1>Description</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/2 relative" style={{ transform: 'translateY(-10%)' }}>
                        <div className="flex flex-row justify-center">
                            <a className="w-1/3 flex flex-col justify-center items-center" href="#" style={{ transform: 'translateY(5%) translateX(10%)' }}>Visit Now</a>
                            <img className="w-1/3 rounded-md border-2 border-bestGrey" src="test.png" alt="screen" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/12 h-screen"></div>
        </div>

    );
}

export default Work;
