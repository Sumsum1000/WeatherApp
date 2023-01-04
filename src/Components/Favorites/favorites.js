import { useEffect, useState } from 'react';
import style from './favorites.module.scss';
// import { fetchCityStart } from '../fetchActions';
// import { useSelector, useDispatch } from 'react-redux';
// import { favoritesListActions, weatherDataActions } from '../Store/store';
import { FavoriteCity } from './favoriteCity';
import { fetchCityStart } from '../fetchActions';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCity, fetchCityData, extractHours, finalCityData } from '../currentCity'
import { favoritesDataActions, favoritesListActions } from '../Store/store'

export const Favorites = ({className}) => {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.favoritesList.cities)
    const favorites = useSelector((state) => state.cityData)
    const data = useSelector((state) => state.cityData);
    const [dataToMap, setDataToMap] = useState([
        {dt_txt: '', weather: [{icon: ''}], temp0: ''}
    ]);
    const [favoritesList, setFavoritesList] = useState([]);
    const [tempCity, setTempCity] = useState();

    const fetchDays = async(cityName) => {
        const cityData = await fetchCity(cityName)
        const allData = await fetchCityData(cityData) 
        
        const extractData = await extractHours(allData)
        const finalData = await finalCityData(extractData, cityName);
        setTempCity([finalData])
        console.log('tempCity ', tempCity);
        dispatch(favoritesDataActions.addToFavoritesData(finalData))
    }

    const handleRemove = (id, name) => {
        console.log('Removed');
        dispatch(favoritesDataActions.removeFavoritesData(id))
        dispatch(favoritesListActions.removeFromFavorites(name))
    }

    useEffect(() => {
        //fetchDays('London')

    }, [])


    return(
        <div className={[style['favorites']]}>
            {favorites.length === 0 ? <p>no favorites added</p> : favorites.map(city => {
               return <FavoriteCity 
                id={city.id}
                onClick={() => handleRemove(city.id, city.name)}
                name={city.name} 
                temp1={city.days[0].temp}
                temp2={city.days[1].temp}
                temp3={city.days[2].temp}
                temp4={city.days[3].temp}
                src1={`http://openweathermap.org/img/wn/${city.days[0].icon}@4x.png`} 
                src2={`http://openweathermap.org/img/wn/${city.days[1].icon}@4x.png`} 
                src3={`http://openweathermap.org/img/wn/${city.days[2].icon}@4x.png`}  
                src4={`http://openweathermap.org/img/wn/${city.days[3].icon}@4x.png`}  
               />
            })}
        </div>  
    )
}