import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeSwitcherContextType = {
    darkMode: boolean;
    themeSwitcher: () => void;
};

const ThemeSwitcher = createContext<ThemeSwitcherContextType>({
    darkMode: false,
    themeSwitcher: () => {},
});

export const ThemeSwitcherProvider = ({ children }: { children: React.ReactNode }) => {
    // define state darkMode
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    )

    useEffect(() => {
        const root = document.documentElement;
        const toggleTransition = () => {
            root.classList.add('no-transition');
            setTimeout(() => {
                root.classList.remove('no-transition');
            }, 0);
        };

        toggleTransition();

        if (darkMode)
            document.body.classList.add('dark');
        else
            document.body.classList.remove('dark');

        // set darkMode in localstorage
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    const themeSwitcher = () => setDarkMode(!darkMode);

    return (
        <ThemeSwitcher.Provider value={{ darkMode, themeSwitcher }}>
            {children}
        </ThemeSwitcher.Provider>
    )
}

export const useTheme = () => useContext(ThemeSwitcher);
