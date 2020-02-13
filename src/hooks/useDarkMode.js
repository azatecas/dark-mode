import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (initialValue) => {

    const [ darkMode, setDarkMode ] = useLocalStorage('dark', initialValue)
    useEffect(()=>{
        darkMode ? document.body.classList.add("dark-mode") :
        document.body.classList.remove("dark-mode");
    },[initialValue])

    return [ darkMode, setDarkMode ]
}

export default useDarkMode;