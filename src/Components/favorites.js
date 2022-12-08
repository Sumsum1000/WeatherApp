import { useEffect, useState } from 'react';
import style from './favorites.module.scss';
import { fetchCityStart } from './fetchActions';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesListActions, weatherDataActions } from './Store/store';

export const Favorites = ({className}) => {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.favoritesList.cities)
    const [allData, setAllData] = useState([]);

    const fetchCity = async(name) => {
        const cityStart = await fetchCityStart('Tokyo');
        const newLat = await cityStart[0].lat;
        const newLon = await cityStart[0].lon;
        const cityUrl =`
        https://api.openweathermap.org/data/2.5/forecast?lat=${newLat}&lon=${newLon}&appid=ab96154ce8f20e07812ea1417c9a0c0c` 
        const cityDetails = await fetch(cityUrl);
        let cityDetailsJson = await cityDetails.json();
        const finalData = await cityDetailsJson.list.filter(element => element.dt_txt.split('').splice(11).join('') === "12:00:00")
        return finalData;

        // update state - redux
        console.log('cityStart ', finalData);
    }

    useEffect(() => {
        fetchCity();
    }, [])

    useEffect(() => {
        list.map(async(name) => {
            const temp = await fetchCity(name);
            setAllData([...allData, temp])
        })
    }, [list])

    useEffect(() => {
        console.log('allData: ', allData);
    }, [allData])


    return(
        <div className={[style['favorites']]}>
            <div className={[style['favorite-city']]}>
                <p className={[style['name']]}>Tel-Aviv</p>
                <div className={[style['next-day']]}>
                    <img src=' http://openweathermap.org/img/wn/10d@4x.png'/>
                    <div className={[style['temp-date']]}>
                        <p>Today</p>
                        <p>273</p>
                    </div>
                </div>  
                <div className={[style['next-day']]}>
                    <img src=' http://openweathermap.org/img/wn/10d@4x.png'/>
                    <div className={[style['temp-date']]}>
                        <p>2022-12-10</p>
                        <p>273</p>
                    </div>
                </div>  
                <div className={[style['next-day']]}>
                    <img src=' http://openweathermap.org/img/wn/10d@4x.png'/>
                    <div className={[style['temp-date']]}>
                        <p>2022-12-10</p>
                        <p>273</p>
                    </div>
                </div> 
                <div className={[style['next-day']]}>
                    <img src=' http://openweathermap.org/img/wn/10d@4x.png'/>
                    <div className={[style['temp-date']]}>
                        <p>2022-12-10</p>
                        <p>273</p>
                    </div>
                </div> 
                <div className={[style['next-day']]}>
                    <img src=' http://openweathermap.org/img/wn/10d@4x.png'/>
                    <div className={[style['temp-date']]}>
                        <p>2022-12-10</p>
                        <p>273</p>
                    </div>
                </div> 
            </div>

        </div>
        
    )
}