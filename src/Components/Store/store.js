import { configureStore, createSlice } from "@reduxjs/toolkit";

const onStartSlice = createSlice({
  name: "isFirstTime",
  initialState: false,
  reducers: {
    setIsFirstTime(state) {
      return (state = true);
    },
  },
});

const currentCitySlice = createSlice({
  name: "currentCity",
  initialState: {
    name: "",
    heartColor: "red",
    days: [
      { dt_txt: "", weather: [{ icon: "" }], temp: "" },
      { dt_txt: "", weather: [{ icon: "" }], temp: "" },
      { dt_txt: "", weather: [{ icon: "" }], temp: "" },
      { dt_txt: "", weather: [{ icon: "" }], temp: "" },
      { dt_txt: "", weather: [{ icon: "" }], temp: "" },
    ],
  },
  reducers: {
    setCurrentCity(state, action) {
      return (state = action.payload);
    },
    toggleHeartColor(state, action) {
      let color;
      if (action.payload === true) {
        color = "green";
      } else {
        color = "red";
      }
      state.heartColor = color;
    },
  },
});

const favoritesListSlice = createSlice({
  name: "favoritesList",
  initialState: { cities: [], heartColor: "red" },
  reducers: {
    addToFavorite(state, action) {
      state.cities = [...state.cities, action.payload];
    },
    removeFromFavorites(state, action) {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
  },
});

const favoritesDataSlice = createSlice({
  name: "cityData",
  initialState: [
    // {
    //     city: 'Asaf',
    //     id: 0.43645755
    //     heartColor: 'red'
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
    addToFavoritesData(state, action) {
      return (state = [...state, action.payload]);
    },
    removeFavoritesData(state, action) {
      const id = action.payload;
      const newState = state;
      const result = newState.filter((e) => e.id !== id);
      return (state = [...result]);
    },
  },
});

export const store = configureStore({
  reducer: {
    favoritesList: favoritesListSlice.reducer,
    cityData: favoritesDataSlice.reducer,
    currentCity: currentCitySlice.reducer,
    isFirstTime: onStartSlice.reducer,
  },
});

export const favoritesListActions = favoritesListSlice.actions;
export const favoritesDataActions = favoritesDataSlice.actions;
export const currentCityActions = currentCitySlice.actions;
export const onStartActiuons = onStartSlice.actions;
