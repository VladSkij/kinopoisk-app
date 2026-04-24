import {useGetMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import type {MainPageCategoryEndpoints} from "@/features/movies/ui/MovieList/lib/types/types.ts";

type Props ={
    category:MainPageCategoryEndpoints
}

export const MovieList = ({category}:Props) => {

    const {data, isLoading, isError} = useGetMoviesQuery(category)
    if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Something went wrong...</div>
    return(
        <div>
            {data?.results.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </div>
    )
};
