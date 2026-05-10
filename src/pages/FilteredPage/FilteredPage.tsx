import {FilteredMovieList} from "@/features/movies/ui/FilteredMovieList/FilteredMovieList.tsx";
import {FiltersSidebar} from "@/pages/FilteredPage/FiltersSidebar/FiltersSidebar.tsx";
import s from './FilteredPage.module.css'
import {useState} from "react";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";
import {useGetFilteredMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";

export const FilteredPage = () => {

    const [sortBy, setSortBuy] = useState<SortCategoryValues>('popularity.desc')
    const [rating, setRating] = useState<number[]>([10,10])
    const [genresId, setGenresId] = useState<number[]>([])
    const [page, setPage] = useState(1)

    const {data} = useGetFilteredMoviesQuery({ sortBy, ratingMin:rating[0], ratingMax:rating[1], genres:genresId, page })
    console.log(data)
    return (
        <div className={s.container}>
            <aside className={s.sideBar}>
                <FiltersSidebar sortBy={sortBy}/>
            </aside>
            <section className={s.filteredList}>
                <FilteredMovieList/>
                {data?.results.map(movie => (
                    <div key={movie.id}>{movie.title}</div>
                ))}
            </section>
        </div>
    );
};

