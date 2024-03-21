import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const translateValue = isChecked ? '72%' : '0%'; // Calcul basé sur la largeur du switch et du conteneur

  return (
        <div className="flex flex-col items-center justify-center mb-5">
            <h1 className="text-border text-bestGrey font-bold text-xl">In Search</h1>
            <div className="flex items-center justify-center w-full py-2">
                <input
                id="toggle"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="sr-only"
                />
                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                    <div className="relative w-44">
                        <div className="text-lg text-bestGrey text-border bg-bestGrey border-2 border-bestWhite rounded-xl shadow-inner flex flex-row items-center justify-around w-full h-10">
                        <p>Yes</p>
                        <p>No</p>
                        </div>
                        <div 
                        className={`absolute w-7/12 h-10 bg-bestDark border-2 border-bestWhite rounded-xl shadow flex items-center justify-center text-xs font-bold top-0 transition-transform duration-300 ease-in-out`}
                        style={{ transform: `translateX(${translateValue})` }}
                        >
                        <span className={`text-2xl ${isChecked ? 'text-red-500' : 'text-green-400'}`}>
                            {isChecked ? 'No' : 'Yes'}
                        </span>
                        </div>
                    </div>
                </label>
            </div>
        </div>
  );
};

export default ToggleSwitch;
