import { useEffect, useState } from 'react';
import style from './favorites.module.scss';
// import { fetchCityStart } from '../fetchActions';
// import { useSelector, useDispatch } from 'react-redux';
// import { favoritesListActions, weatherDataActions } from '../Store/store';
import { FavoriteCity } from './favoriteCity';

export const Favorites = ({className}) => {



    return(
        <div className={[style['favorites']]}>
            <FavoriteCity />
        </div>
        
    )
}