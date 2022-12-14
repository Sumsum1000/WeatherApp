import { configureStore, createSlice } from "@reduxjs/toolkit";


const favoritesListSlice = createSlice({
    name: 'favoritesList',
    initialState: {cities: ['Tokyo, Paris']},
    reducers: {
        addToFavorite (state, action) {
            state.cities = [...state.cities, action.payload]
        }
    }
})

export const store = configureStore({
    reducer: { favoritesList: favoritesListSlice.reducer}
})

export const favoritesListActions = favoritesListSlice.actions;