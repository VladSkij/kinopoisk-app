import {FilteredMovieList} from "@/features/movies/ui/FilteredMovieList/FilteredMovieList.tsx";
import {FiltersSidebar} from "@/pages/FilteredPage/FiltersSidebar/FiltersSidebar.tsx";
import s from './FilteredPage.module.css'
import {useState} from "react";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";

export const FilteredPage = () => {

    const [sortBy, setSortBuy] = useState<SortCategoryValues>('popularity.asc')
    const [rating, setRating] = useState<number[]>([0,10])
    const [genresId, setGenresId] = useState<number[]>([])
    const [page, setPage] = useState(1)

    return (
        <div className={s.container}>
            <aside className={s.sideBar}>
                <FiltersSidebar sortBy={sortBy}/>
            </aside>
            <section className={s.filteredList}>
                <FilteredMovieList/>
            </section>
        </div>
    );
};

