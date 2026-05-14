import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


export type FavoritesMovies = {
    id: number;
    title: string;
    posterUrl: string;
    voteAverage: number;
}

const localStorageMovies = JSON.parse(localStorage.getItem('favorites')||'[ ]')

type FavoritesState = {
    favorites: FavoritesMovies[]
}

const initialState: FavoritesState = {
    favorites:localStorageMovies
}

export const favoritesSlice = createSlice({
    name: 'favoriteMovies',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<FavoritesMovies>) => {
            state.favorites = state.favorites.filter((movie) => movie.id === action.payload.id ? state.favorites : false)
        }
        },
})