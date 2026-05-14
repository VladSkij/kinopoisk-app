import {useState} from "react";
import {useGetSearchedMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import {skipToken} from "@reduxjs/toolkit/query";
import {SearchInput} from "@/shared/components/SearchInput/SearchInput.tsx";
import s from "./SearchPage.module.css"
import {SearchResults} from "@/pages/SearchPage/SearchResults.tsx";

export const SearchPage = () => {

    const [searchTitle, setSearchTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const {data} = useGetSearchedMoviesQuery(searchTitle ? {search:searchTitle, page:currentPage} : skipToken)
    const countPages = data?.total_pages
    const movies = data?.results
    return (
        <section className={s.container}>
           <h1 className={s.title}>Search Results</h1>
            <SearchInput onSearch={setSearchTitle}/>
            {searchTitle ?
                <SearchResults movies={movies} countPages={countPages} currentPage={currentPage} searchTitle={searchTitle} setCurrentPage={setCurrentPage}/>
                : <p className={s.emptyText}>Enter a movie title to start searching.</p>
            }

        </section>
    );
};


