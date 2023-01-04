import style from './favorites.module.scss';
import { fetchCityStart } from '../fetchActions';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesListActions, weatherDataActions } from '../Store/store';
import { FavoriteDay } from './favoriteDay';

export const FavoriteCity = ({
    id, name, src1, src2, src3, src4, temp1, temp2, temp3, temp4, onClick}) => {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.favoritesList.cities)
    const [dataToMap, setDataToMap] = useState([
        {dt_txt: '', weather: [{icon: ''}], temp0: ''}
    ]);
    let finalData;

    const fetchCity = async(name) => {
        const cityStart = await fetchCityStart('Tokyo');
        const newLat = await cityStart[0].lat;
        const newLon = await cityStart[0].lon;
        const cityUrl =`
        https://api.openweathermap.org/data/2.5/forecast?lat=${newLat}&lon=${newLon}&appid=ab96154ce8f20e07812ea1417c9a0c0c` 
        const cityDetails = await fetch(cityUrl);
        const cityDetailsJson = await cityDetails.json();
        finalData = await cityDetailsJson.list.filter(element => element.dt_txt.split('').splice(11).join('') === "12:00:00")

        setDataToMap(finalData);
    }

    useEffect(() => {
        fetchCity();
    }, [])

    return(
        <div className={[style['favorite-city']]} id={id}>
            <h3>{name}</h3>
            <FavoriteDay src={src1} temp={temp1} />
            <FavoriteDay src={src2} temp={temp2} />
            <FavoriteDay src={src3} temp={temp3} />
            <FavoriteDay src={src4} temp={temp4} />
            <button onClick={onClick}>x</button>
        </div> 
    )
}