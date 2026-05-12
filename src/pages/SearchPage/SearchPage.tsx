import {useState} from "react";
import {useGetSearchedMoviesQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import {skipToken} from "@reduxjs/toolkit/query";
import {SearchInput} from "@/shared/components/SearchInput/SearchInput.tsx";
import s from "./SearchPage.module.css"
import {MovieCard} from "@/shared/ui/MovieCard/MovieCard.tsx";

export const SearchPage = () => {

    const [searchTitle, setSearchTitle] = useState('');
    const [page, setPage] = useState(1);
    const {data} = useGetSearchedMoviesQuery(searchTitle ? {search:searchTitle, page} : skipToken)


    return (
        <section className={s.container}>
           <h1 className={s.title}>Search Results</h1>
            <SearchInput onSearch={setSearchTitle}/>
            {searchTitle ?
                <ul className={s.list}>{data?.results.map(movie => (
                    <li key={movie.id}><MovieCard movie={movie}/></li>
                ))}
            </ul>: <p className={s.emptyText}>Enter a movie title to start searching.</p>}

        </section>
    );
};

