import {MoviesSection} from "@/features/movies/ui/MoviesSection/MoviesSection.tsx";
import {HeroBanner} from "@/features/movies/ui/HeroBanner/HeroBanner.tsx";

export const MainPage = () => {

    return(
        <div>
                <HeroBanner/>
                <MoviesSection category="popular" categoryTitle="Popular Movies"/>
                <MoviesSection category="top_rated" categoryTitle="Top Rated Movies"/>
                <MoviesSection category="upcoming" categoryTitle="Upcoming Movies"/>
                <MoviesSection category="now_playing" categoryTitle="Now Playing Movies"/>
        </div>
    )
}