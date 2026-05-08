import {z} from "zod"

export const moviesApiSchema = z.object({
    id: z.number().int().default(0),
    poster_path: z.string(),
    title:z.string(),
    vote_average: z.number().default(0),
    backdrop_path: z.string(),
})

export type Movie = z.infer<typeof moviesApiSchema>


export const MoviesResponseApiSchema = z.object({
    page: z.number().int().default(0),
    results: z.array(moviesApiSchema),
    total_pages: z.number().int().default(0),
    total_results: z.number().int().default(0)
})

export type MoviesResponse = z.infer<typeof MoviesResponseApiSchema>

export const GenreApiSchema = z.object({
    id: z.number().int(),
    name: z.string(),
})

export const GenresResponseApiSchema= z.object({
    genres: z.array(GenreApiSchema),
})

export type GenresResponse = z.infer<typeof GenresResponseApiSchema>
export type Genre = z.infer<typeof GenreApiSchema>