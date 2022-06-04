// сделала кастомный хук для localStorage
import { useState, useEffect } from 'react';

export function useLocalStorage(initialState, key) {

    const getStorage = () => {
        const storage = localStorage.getItem(key);
        return storage ? storage : initialState;
    };

    const [value, setValue] = useState(getStorage)

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue]
}
