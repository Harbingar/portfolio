
import { useState, useEffect } from 'react';

let sharedIndex = 0; // Cet état est partagé implicitement
const listeners = new Set<() => void>();

const notifyListeners = () => {
    listeners.forEach(listener => listener());
};

export const useSharedCarouselState = () => {
    const [, setTick] = useState(0);

    useEffect(() => {
        const listener = () => setTick(tick => tick + 1);
        listeners.add(listener);
        listener(); // Pour initialiser l'état

        return () => {
            listeners.delete(listener);
        };
    }, []);

    const setCurrentIndex = (index: number) => {
        sharedIndex = index;
        notifyListeners();
    };

    return { currentIndex: sharedIndex, setCurrentIndex };
};
