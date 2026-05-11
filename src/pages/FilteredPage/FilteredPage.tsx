import {FilteredMovieList} from "@/features/movies/ui/FilteredMovieList/FilteredMovieList.tsx";
import {FiltersSidebar} from "@/pages/FilteredPage/FiltersSidebar/FiltersSidebar.tsx";
import s from './FilteredPage.module.css'
import {useState} from "react";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";
import {useGetFilteredMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";

export const FilteredPage = () => {
    const [sortBy, setSortBuy] = useState<SortCategoryValues>('popularity.desc')
    const [rating, setRating] = useState<number[]>([0,10])
    const [genresId, setGenresId] = useState<number[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    const {data} = useGetFilteredMoviesQuery({ sortBy, ratingMin:rating[0], ratingMax:rating[1], genres:genresId, page:currentPage })
    const countPages = data?.total_pages

    const onSortChangeHandler = (sort:SortCategoryValues)=>{
        setSortBuy(sort)
    }
    const onRatingChangeHandler = (rating:number[]) => {
        setRating(rating)
    }
    const onGenreChangeHandler = (genreId:number) => {
        setGenresId(prev =>
            prev.includes(genreId)
                ? prev.filter(g => g !== genreId)
                : [...prev, genreId]
        )
    }
    const onResetFiltersHandler = () =>{
        setSortBuy('popularity.desc')
        setRating([0,10])
        setGenresId([])
    }
    const onChangePageHandler = (page:number) => {
        setCurrentPage(page)
    }

    return (
        <div className={s.container}>
            <aside className={s.sideBar}>
                <FiltersSidebar
                    onSortChange={onSortChangeHandler}
                    sortValue={sortBy}
                    onRatingChange={onRatingChangeHandler}
                    onGenreChange={onGenreChangeHandler}
                    genresId={genresId}
                    onResetFilters={onResetFiltersHandler}
                />
            </aside>
            <section className={s.filteredList}>
                <FilteredMovieList
                    filteredList={data?.results ?? []}
                    currentPage={currentPage}
                    countPages={countPages}
                    setCurrentPage={onChangePageHandler}
                    />
            </section>
        </div>
    );
};

