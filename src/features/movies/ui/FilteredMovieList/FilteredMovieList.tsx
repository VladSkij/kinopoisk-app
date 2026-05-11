import type {Movie} from "@/features/movies/moviesApi/moviesApi.types.ts";
import s from "@/features/movies/ui/MovieList/MovieListy.module.css";
import {MovieCard} from "@/shared/ui/MovieCard/MovieCard.tsx";

type Props = {
    filteredList: Movie[]
    limit?: number
}

export const FilteredMovieList = ({filteredList, limit}:Props, ) => {
    return (
        <div>
            <ul className={s.list}>
                {filteredList.slice(0, limit ?? filteredList.length).map(movie => (
                    <li key={movie.id}><MovieCard movie={movie}/></li>
                ))}
            </ul>
        </div>
    );
};

