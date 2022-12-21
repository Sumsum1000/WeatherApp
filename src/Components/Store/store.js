import { configureStore, createSlice } from "@reduxjs/toolkit";

const onStartSlice = createSlice({
    name: 'isFirstTime',
    initialState: false,
    reducers: {
        setIsFirstTime (state) {
            return state = true;
        }
    }
})


const currentCitySlice = createSlice({
    name: 'currentCity',
    initialState: {
        name: 'My', 
        days: [
            {dt_txt: '', weather: [{icon: ''}], temp: ''},
            {dt_txt: '', weather: [{icon: ''}], temp: ''},
            {dt_txt: '', weather: [{icon: ''}], temp: ''},
            {dt_txt: '', weather: [{icon: ''}], temp: ''},
            {dt_txt: '', weather: [{icon: ''}], temp: ''}
            ]
    },
    reducers: {
        setCurrentCity (state, action) {
            return state = action.payload;
        }
    }
})

const favoritesListSlice = createSlice({
    name: 'favoritesList',
    initialState: {cities: ['tokyo']},
    reducers: {
        addToFavorite (state, action) {
             state.cities = [...state.cities, action.payload]
        },
        removeFromFavorites (state, action) {
            state.cities = state.cities.filter(city => city !== action.payload)
        }
    }
})

const favoritesDataSlice = createSlice({
    name: 'cityData',
    initialState: [
        {
            city: 'Asaf', 
            days: [
                {dt_txt: '', weather: [{icon: ''}], temp: ''},
                {dt_txt: '', weather: [{icon: ''}], temp: ''},
                {dt_txt: '', weather: [{icon: ''}], temp: ''},
                {dt_txt: '', weather: [{icon: ''}], temp: ''},
                {dt_txt: '', weather: [{icon: ''}], temp: ''}
                ]
        }
    ],
    reducers: {
        addToFavoritesData (state, action) {
            state = [...state, action.payload]
        }
    }
})

export const store = configureStore({
    reducer: { 
        favoritesList: favoritesListSlice.reducer,
        cityData: favoritesDataSlice.reducer,
        currentCity: currentCitySlice.reducer,
        isFirstTime: onStartSlice.reducer
    }
})

export const favoritesListActions = favoritesListSlice.actions;
export const favoritesDataActions = favoritesDataSlice.actions;
export const currentCityActions = currentCitySlice.actions;
export const onStartActiuons = onStartSlice.actions;