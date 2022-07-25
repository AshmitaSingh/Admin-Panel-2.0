import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#489fb5');
    const [currentMode, setCurrentMode] = useState('Light');
    // Sidebar for Themes
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        // Saving the current mode in local storage
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        // console.log(e);
        // setCurrentColor(e.target.value);
        // localStorage.setItem('colorMode', e.target.value);

        setCurrentColor(color);

        // Saving the current theme color in local storage
        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu, 
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setMode,
                setColor,
                themeSettings, 
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);