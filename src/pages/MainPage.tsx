import {MoviesSection} from "@/features/movies/ui/MoviesSection/MoviesSection.tsx";
import {HeroBanner} from "@/features/movies/ui/HeroBanner/HeroBanner.tsx";

export const MainPage = () => {

    const limitMoveCard = 6;

    return(
        <>
                <HeroBanner/>
            <section>
                <MoviesSection category="popular" categoryTitle="Popular Movies" limit={limitMoveCard}/>
                <MoviesSection category="top_rated" categoryTitle="Top Rated Movies" limit={limitMoveCard} />
                <MoviesSection category="upcoming" categoryTitle="Upcoming Movies" limit={limitMoveCard} />
                <MoviesSection category="now_playing" categoryTitle="Now Playing Movies" limit={limitMoveCard} />
            </section>
        </>
    )
}