import style from './content.module.scss';
import placeholder from '../placeholder.jpg';
import favorite from '../Favorite_icon.png';

import { IconCard } from './IconCard';
//-----------------------------------------------
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentCityActions, testActions } from "./Store/store";
import { onStartActiuons } from './Store/store';
import { favoritesListActions } from '.././Components/Store/store';
import { fetchCity, fetchCityData, extractHours, finalCityData } from './currentCity'




export const Content = () => {

        localStorage.setItem('isFirstTime', 0);
        const inputRef = useRef();
        const [listData, setListData] = useState([]);
        const [inputText, setInputText] = useState('');

        const dispatch = useDispatch();

        const fetchDays = async(cityName) => {
        const cityData = await fetchCity(cityName)
        const allData = await fetchCityData(cityData) 
        
        const extractData = await extractHours(allData)
        const finalData = finalCityData(extractData, cityName);
        setListData([...listData, finalData])
        dispatch(currentCityActions.setCurrentCity(finalData))
    }

    const currentCity = useSelector(state => state.currentCity) 
    const firstTime = useSelector(state => state.isFirstTime);
    const favorites = useSelector(state => state.favoritesList.cities);
    
    const fetchCityHandler = (e) => {
        if (e.keyCode === 13) {
            if (inputRef.current.value === '' || inputRef.current.value === undefined) {
                console.log('Please enter a valid name');
            }
            else {
                fetchDays(inputRef.current.value)
            }
        }
    }


    const favoriteHandler = (city) => {
        console.log('currentCity ', currentCity);
        const favoritesLowerCase = favorites.map(city => {
            return city.toLowerCase()})
        const isCity = favoritesLowerCase.includes(city.toLowerCase())
        if (!isCity) {
            dispatch(favoritesListActions.addToFavorite(city))
        }
        if (isCity) {
            dispatch(favoritesListActions.removeFromFavorites(city))
            }
    }


    useEffect(() => {
    // Load Tel Aviv only first time
       if (firstTime === false) {
            fetchDays('tel-aviv')
            dispatch(onStartActiuons.setIsFirstTime());
       }

      
    }, [])

    useEffect(() => {
        console.log('FAV ', favorites);
    }, [favorites])

    return(
        <div className={[style['content']]}>
            {/* <CurrentCity /> */}
            {/* Search field - city name */}
            <div className={style['favorites-container']}>
                <input 
                    className={style['input-city']} 
                    ref={inputRef} 
                    placeholder='Enter a city'
                    onKeyDown={(e) => fetchCityHandler(e)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" 
                  onClick={() => favoriteHandler(currentCity.name)}
                  width="28" height="28" viewBox="0 0 24 24"><path fillOpacity={1} fill={'red'} d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
            </div>
            {/* <h1>{list}</h1> */}
             {/* Current weather */}
                <div className={style['grid-current']}>
                    <img src={`http://openweathermap.org/img/wn/${currentCity.days[0].icon}@4x.png`} className={style['test']}/>
                    <div className={style['deg-container']}>
                        <h3 className={style['namecurrent']}>{currentCity.name}</h3>
                        <p className={style['deg-current']}>
                                 {currentCity.days[0].temp}
                        </p>
                    </div>
                    <p className={[style['descreption']]}>{currentCity.days[0].description}</p>
                </div>
                <div className={style['five-days-container']}>
                    <IconCard  
                        src={`http://openweathermap.org/img/wn/${currentCity.days[1].icon}@4x.png`}
                        date={currentCity.days[1].date}
                        temp={currentCity.days[1].temp}
                    />
                    <IconCard 
                        src={`http://openweathermap.org/img/wn/${currentCity.days[2].icon}@4x.png`}
                        date={currentCity.days[2].date}
                        temp={currentCity.days[2].temp}
                    />
                    <IconCard 
                        src={`http://openweathermap.org/img/wn/${currentCity.days[3].icon}@4x.png`}
                        date={currentCity.days[3].date}
                        temp={currentCity.days[3].temp}
                    />
                    <IconCard 
                        src={`http://openweathermap.org/img/wn/${currentCity.days[4].icon}@4x.png`}
                        date={currentCity.days[4].date}
                        temp={currentCity.days[4].temp}
                    />
                </div>
        </div>
        
    )
}
