import type {Movie} from "@/features/movies/moviesApi/moviesApi.types.ts";
import s from "@/features/movies/ui/MovieList/MovieListy.module.css";
import {MovieCard} from "@/shared/ui/MovieCard/MovieCard.tsx";
import {Pagination} from "@mui/material";

type Props = {
    filteredList: Movie[]
    limit?: number
    currentPage:number
    countPages?:number
    setCurrentPage: (page: number)=>void
}

export const FilteredMovieList = ({filteredList, limit, currentPage, countPages, setCurrentPage}:Props, ) => {
    return (
        <div>
            <ul className={s.list}>
                {filteredList.slice(0, limit ?? filteredList.length).map(movie => (
                    <li key={movie.id}><MovieCard movie={movie}/></li>
                ))}
            </ul>
            <div className={s.paginationWrapper}>
                <Pagination count={countPages} page={currentPage}  onChange={(_, page) => setCurrentPage(page)}/>
            </div>
        </div>
    );
};

