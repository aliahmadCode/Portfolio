'use client';

// importing react, and other hooks
import { useState, useContext, createContext, ReactNode, useEffect } from 'react';

interface DarkModeState {
    current: string;
}

interface DarkModeContextValue {
    mode: DarkModeState;
    setMode: React.Dispatch<React.SetStateAction<DarkModeState>>;
    toggleMode: (isDark: boolean) => void; // true for dark false for light
}

const DarkModeContext = createContext<DarkModeContextValue | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<DarkModeState>({ current: "" });

    useEffect(() => {
        const currentMode: string | null = localStorage.getItem("theme");
        if (!currentMode) {
            toggleMode(true);
        } else {
            if (currentMode == "dark") {
                toggleMode(true);
            } else {
                toggleMode(false);
            }
        }
    }, [])

    const toggleMode = (isDark: boolean) => {
        if (isDark) {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            setMode((prev) => ({ ...prev, current: "dark" }))
        } else {
            localStorage.setItem("theme", "light");
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            setMode((prev) => ({ ...prev, current: "light" }))
        }
    }

    return (
        <DarkModeContext.Provider value={{ mode, setMode, toggleMode }}>{children}</DarkModeContext.Provider>
    )
}

export const useDarkModeContext = (): DarkModeContextValue => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkModeContext must be within the DarkModeProvider")
    }
    return context;
}
