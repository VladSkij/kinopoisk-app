import {Routing} from "@/shared/routing/Routing.tsx";
import {Header} from "@/shared/components/Header/header.tsx";
import {Footer} from "@/shared/components/Footer/Footer.tsx";
import s from './App.module.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useThemeMode} from "@/app/Providers/theme/useThemeMode.ts";

export const App = () => {
    const {theme, themeMode, toggleTheme } = useThemeMode()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className={s.app} data-theme={themeMode}>
                <Header themeMode={themeMode} toggleTheme={toggleTheme}/>
                <main className={s.main}>
                    <Routing/>
                </main>
                <Footer/>
            </div>
        </ThemeProvider>


    )
}