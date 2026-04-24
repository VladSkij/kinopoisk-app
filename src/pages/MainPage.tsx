import {MovieList} from "@/features/movies/ui/MovieList/MovieList.tsx";

export const MainPage = () => {

    return(
        <div>
            <MovieList category={"popular"}/>
            <MovieList category={"top_rated"}/>
            <MovieList category={"upcoming"}/>
            <MovieList category={"now_playing"}/>
        </div>
    )
}