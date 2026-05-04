import logo from '@/assets/kinopoiskLogo.svg'
import {NavLink} from "react-router-dom";
import {Path} from "@/shared/routing/paths.ts";
import s from './header.module.css'
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to={Path.Main}>
                <img src={logo} alt="TMDB logo" className={s.logoImg}/>
            </NavLink>
            <nav className={s.navBar}>
                <ul className={s.navList}>
                    <li>
                        <NavLink to={Path.Main} className={s.navListItem}>
                            Main
                        </NavLink>
                    </li>
                    <li><NavLink to={Path.CategoryMovies} className={s.navListItem}>
                        Category movies
                    </NavLink></li>
                    <li><NavLink to={Path.FilteredMovies} className={s.navListItem}>
                        Filtered movies
                    </NavLink></li>
                    <li><NavLink to={Path.Search} className={s.navListItem}>
                        Search
                    </NavLink></li>
                    <li><NavLink to={Path.Favorites} className={s.navListItem}>
                        Favorites
                    </NavLink></li>
                </ul>
            </nav>
            <button className={s.themeBtn}>
                <LightModeSharpIcon className={s.themeIcon} fontSize="small"/>
            </button>
        </header>
    )
}