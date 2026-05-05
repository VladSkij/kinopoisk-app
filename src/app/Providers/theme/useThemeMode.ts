import {useMemo, useState} from "react";
import {createTheme} from "@mui/material";

export type ThemeMode = 'light' | 'dark';

export const useThemeMode  = () =>{
    const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

    const theme = useMemo(()=>{
        return createTheme({
            palette: {
                mode: themeMode,
            },
        });
    }, [themeMode]);
    const toggleTheme = ()=>{
        setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return {
        theme,
        themeMode,
        toggleTheme,
}
}