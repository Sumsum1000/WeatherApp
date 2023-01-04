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
    initialState: {cities: []},
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
        // {
        //     city: 'Asaf', 
        //     id: 0.43645755
        //     days: [
        //         {dt_txt: '', weather: [{icon: ''}], temp: ''},
        //         {dt_txt: '', weather: [{icon: ''}], temp: ''},
        //         {dt_txt: '', weather: [{icon: ''}], temp: ''},
        //         {dt_txt: '', weather: [{icon: ''}], temp: ''},
        //         {dt_txt: '', weather: [{icon: ''}], temp: ''}
        //         ]
        // }
    ],
    reducers: {
        addToFavoritesData (state, action) {
           return state = [...state, action.payload]
        },
        removeFavoritesData (state, action) {
            const id = action.payload;
            // const arr1 = state.slice(0, index);
            // const arr2 = state.slice(index + 1, state.legth);
            // const newState = arr1.concat(arr2);
            //const newState = state.splice(index, 1)
            //const newState = [{name: 'Hello'}]
            //console.log('newState ', newState);
            const newState = state;
            const result = newState.filter((e) => e.id !== id)
            return state = [...result];
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