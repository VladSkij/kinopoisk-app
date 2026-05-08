import {useGetMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import type {MoveCategoryEndpoints} from "@/features/movies/ui/MovieList/lib/types/types.ts";
import {MovieCard} from "@/shared/ui/MovieCard/MovieCard.tsx";
import s from "./MovieListy.module.css"

type Props ={
    category:MoveCategoryEndpoints
    limit?:number
    page?:number
}



export const MovieList = ({category, limit, page}:Props) => {

    const {data, isLoading, isError} = useGetMoviesQuery({category, page})
    if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Something went wrong...</div>
    return(
        <ul className={s.list}>
            {data?.results.slice(0, limit ?? data.results.length).map(movie => (
                <li key={movie.id}><MovieCard movie={movie}/></li>
            ))}
        </ul>
    )
};
