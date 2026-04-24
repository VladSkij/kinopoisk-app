import {useGetMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";

export const MainPage = () => {

    const {data, isLoading, isError} = useGetMoviesQuery("popular")
   if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Something went wrong...</div>
    return(
        <div>
            {data?.results.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </div>
    )
}