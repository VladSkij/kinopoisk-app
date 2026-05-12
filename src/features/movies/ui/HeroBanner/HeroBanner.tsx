import {useGetMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import {useHeroBanner} from "@/features/movies/ui/HeroBanner/useHeroBanner.ts";
import s from './HeroBanner.module.css'
import {SearchInput} from "@/shared/components/SearchInput/SearchInput.tsx";


export const HeroBanner = () => {
    const {data} = useGetMoviesQuery({ category: "popular" })

    const {banner} =useHeroBanner(data?.results ?? [])
    return (
           <section className={s.heroBanner} style={{ backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,1), transparent 40%),
                linear-gradient(to left, rgba(0,0,0,1), transparent 40%),
                linear-gradient(to top, rgba(0,0,0,1), transparent 60%),
                url(${import.meta.env.VITE_TMDB_IMAGE_URL}${banner?.backdrop_path})`}}>
               <div className={s.content}>
                   <h2 className={s.title}>Welcome</h2>
                   <p className={s.text}>Browse highlighted titles from TMDB</p>
                    <SearchInput />
               </div>
           </section>
    );
};

