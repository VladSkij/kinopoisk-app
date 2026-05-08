import {baseApi} from "@/shared/api/baseApi.ts";
import type {GenresResponse, MoviesResponse} from "@/features/movies/moviesApi/moviesApi.types.ts";

const defaultPageToShow = 1

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<MoviesResponse, {category:string, page?:number}>({
            query: ({category, page = defaultPageToShow}) => `/movie/${category}?page=${page}`,
            providesTags: ( _result, _error, {category}) => [{ type: "Movies", id: category }],
        }),
        getGenres: build.query<GenresResponse,void>({
            query: ()=> `/genre/movie/list`,
            providesTags: ["Genres"]
        })
    }),
})

export const {useGetMoviesQuery, useGetGenresQuery} = moviesApi;