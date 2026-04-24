import {baseApi} from "@/shared/api/baseApi.ts";
import type {MoviesResponse} from "@/features/movies/moviesApi/moviesApi.types.ts";


export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<MoviesResponse, string>({
            query: (category) => `/movie/${category}`,
            providesTags: ( category) => [{ type: "Movies", id: category }],
        }),
    }),
})

export const {useGetMoviesQuery} = moviesApi;