import {MoviesSection} from "@/features/movies/ui/MoviesSection/MoviesSection.tsx";

export const MainPage = () => {

    return(
        <div>
                <MoviesSection category="popular" categoryTitle="Popular Movies"/>
                <MoviesSection category="top_rated" categoryTitle="Top Rated Movies"/>
                <MoviesSection category="upcoming" categoryTitle="Upcoming Movies"/>
                <MoviesSection category="now_playing" categoryTitle="Now Playing Movies"/>
        </div>
    )
}