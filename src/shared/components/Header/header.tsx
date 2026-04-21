import logo from '@/assets/kinopoiskLogo.svg'
import {NavLink} from "react-router-dom";
import {Path} from "@/shared/routing/paths.ts";
import s from './header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to={Path.Main}>
                <img src={logo} alt="TMDB logo" className={s.logoImg}/>
            </NavLink>
            <nav className={s.navBar}>
                <NavLink to={Path.Main}>
                    Main
                </NavLink>
                <NavLink to={Path.CategoryMovies}>
                    Category movies
                </NavLink>
                <NavLink to={Path.FilteredMovies}>
                   Filtered movies
                </NavLink>
                <NavLink to={Path.Search}>
                    Search
                </NavLink>
                <NavLink to={Path.Favorites}>
                    Favorites
                </NavLink>
            </nav>
        </header>
    )
}