import type {Movie} from "@/features/movies/moviesApi/moviesApi.types.ts";
import {MovieCard} from "@/shared/ui/MovieCard/MovieCard.tsx";
import {Pagination} from "@mui/material";
import s from './SearchResults.module.css'
type Props={
    movies?:Movie[],
    countPages?: number,
    currentPage: number,
    searchTitle: string,
    setCurrentPage: (page:number)=>void,
}

export const SearchResults = ({movies, countPages, currentPage, searchTitle, setCurrentPage}:Props) => {

    const isFind = movies?.length !== 0
    return (
        <>
            {isFind ? <div>
                <ul className={s.list}>{movies?.map(movie => (
                    <li key={movie.id}><MovieCard movie={movie}/></li>
                ))}
                </ul>
                <div className={s.paginationWrapper}>
                    <Pagination count={countPages} page={currentPage}  onChange={(_, page)=>setCurrentPage(page)}/>
                </div>
            </div> : <p className={s.emptyText}>No matches found for {`"${searchTitle}"`}</p>}
        </>
    );
};

