import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    tagTypes: ["Movies", "Genres"],
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({
         baseUrl: import.meta.env.VITE_BASE_URL,
         prepareHeaders: (headers) =>{
             headers.set('Authorization', `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`)
             return headers;
         },
     }),
    endpoints: () => ({}),
 })