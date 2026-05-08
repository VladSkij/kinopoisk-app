import {Button} from "@/shared/ui/Button/Button.tsx";
import s from "./CategoryPages.module.css"
import type {MoveCategoryEndpoints} from "@/features/movies/ui/MovieList/lib/types/types.ts";
import {useState} from "react";
import {MovieList} from "@/features/movies/ui/MovieList/MovieList.tsx";
import {Pagination} from "@mui/material";
import {useGetMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";

export const CategoryPage = () => {

    const [activeCategory, setActiveCategory] = useState<MoveCategoryEndpoints>('popular')
    const [currentPage, setCurrentPage] = useState(1)

    const activeCategoryHandler = (category:MoveCategoryEndpoints)=>{
        setActiveCategory(category)
    }
    const {data} = useGetMoviesQuery({category: activeCategory , page:currentPage})

    const countPages = data?.total_pages
    return (
        <>
            <ul className={s.CategoryButtons}>
                <li><Button children={'Popular Movies'} onClick={()=> activeCategoryHandler('popular')} isActive={activeCategory === "popular"}/></li>
                <li><Button children={'Top Rated Movies'} onClick={()=> activeCategoryHandler('top_rated')} isActive={activeCategory === "top_rated"}/></li>
                <li><Button children={'Upcoming Movies'} onClick={()=> activeCategoryHandler('upcoming')} isActive={activeCategory === "upcoming"}/></li>
                <li><Button children={'Now Playing Movies'} onClick={()=> activeCategoryHandler('now_playing')} isActive={activeCategory === "now_playing"}/></li>
            </ul>
            <MovieList category={activeCategory} page={currentPage}/>
            <Pagination count={countPages} page={currentPage}  onChange={(_, page) => setCurrentPage(page)}/>
        </>
        )
}