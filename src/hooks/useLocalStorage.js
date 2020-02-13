import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setStoredValue ] = useState(()=> {
        const checkStorage = window.localStorage.getItem(key);
        if (checkKey) {
            return JSON.parse(checkStorage)
        } else {
            return initialValue;
        }        
    });

    return [ storedValue ];

}

export default useLocalStorage;