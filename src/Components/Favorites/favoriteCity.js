import style from './favorites.module.scss';
import { fetchCityStart } from '../fetchActions';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesListActions, weatherDataActions } from '../Store/store';
import { FavoriteDay } from './favoriteDay';

export const FavoriteCity = () => {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.favoritesList.cities)
    const [allData, setAllData] = useState([]);
    const [test, setTest] = useState([]);

    const fetchCity = async(name) => {
        const cityStart = await fetchCityStart('Tokyo');
        const newLat = await cityStart[0].lat;
        const newLon = await cityStart[0].lon;
        const cityUrl =`
        https://api.openweathermap.org/data/2.5/forecast?lat=${newLat}&lon=${newLon}&appid=ab96154ce8f20e07812ea1417c9a0c0c` 
        const cityDetails = await fetch(cityUrl);
        let cityDetailsJson = await cityDetails.json();
        const finalData = await cityDetailsJson.list.filter(element => element.dt_txt.split('').splice(11).join('') === "12:00:00")


        const tempDay = {};
        finalData.map((day) => {
           
            tempDay.temp = day.main.temp;
            console.log('day ', tempDay);
            setTest((test) => {
               return  [...test, tempDay]
            })
        })      


        
        // update state - redux
        //console.log('cityStart ', test);
    }

    useEffect(() => {
        fetchCity();
    }, [])

    return(
        <div className={[style['favorite-city']]}>
                <p className={[style['name']]}>Tel-Aviv</p>
                <FavoriteDay 
                    date={'Today'}
                    src={'http://openweathermap.org/img/wn/10d@4x.png'} 
                    temp={273}
                />
                <FavoriteDay 
                    date={'2022-12-10'} 
                    src={'http://openweathermap.org/img/wn/10d@4x.png'} 
                    temp={273}
                />
                <FavoriteDay 
                    date={'2022-12-10'} 
                    src={'http://openweathermap.org/img/wn/10d@4x.png'} 
                    temp={273}
                />
                <FavoriteDay 
                    date={'2022-12-10'} 
                    src={'http://openweathermap.org/img/wn/10d@4x.png'} 
                    temp={273}
                />
                <FavoriteDay 
                    date={'2022-12-10'} 
                    src={'http://openweathermap.org/img/wn/10d@4x.png'} 
                    temp={273}
                /> 
            </div>
    )
}