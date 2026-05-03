import {useGetMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import type {MainPageCategoryEndpoints} from "@/features/movies/ui/MovieList/lib/types/types.ts";
import {MovieCard} from "@/shared/ui/MovieCard/MovieCard.tsx";
import s from "./MovieListy.module.css"

type Props ={
    category:MainPageCategoryEndpoints
}

export const MovieList = ({category}:Props) => {

    const {data, isLoading, isError} = useGetMoviesQuery(category)
    if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Something went wrong...</div>
    return(
        <ul className={s.list}>
            {data?.results.slice(0, 6).map(movie => (
                <li key={movie.id}><MovieCard  movie={movie}/></li>
            ))}
        </ul>
    )
};
