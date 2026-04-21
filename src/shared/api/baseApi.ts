import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseApi = createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({
         baseUrl: 'https://api.themoviedb.org/3',
         prepareHeaders: (headers) =>{
             headers.set('Authorization', `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`)
             return headers;
         },
     }),
    endpoints: () => ({}),
 })