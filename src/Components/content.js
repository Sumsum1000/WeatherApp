import style from './content.module.scss';
import placeholder from '../placeholder.jpg';
import favorite from '../Favorite_icon.png';

import { IconCard } from './IconCard';
//-----------------------------------------------
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesListActions, weatherDataActions } from './Store/store';

export const Content = () => {

    const cityRef = useRef();
    const dispatch = useDispatch();

    const list = useSelector((state) => state.favoritesList.cities)
    //console.log('start num: ', weather);

    const [heartColor, setHeartColor] = useState('black')
    const [latLon, setLatLon] = useState({});
    const [cityDetails, setCityDetails] = useState([{main: {temp: 'wait'}},]);  
    const [cityName, setCityName] = useState();
    const [icons, setIcons] = useState('');
    //------------------------------------------------
    const [weatherCurrent, setWeatherCurrent] = useState({description: ''});
    const [weather1, setWeather1] = useState({});
    const [weather2, setWeather2] = useState({});
    const [weather3, setWeather3] = useState({});
    const [weather4, setWeather4] = useState({});

    let tempArr = [];
    let newData;

    const fetchCityData = async (cityName) => {
        let myState;
        
        // First by city name
        setCityName(cityName)
        const r1 = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=
        ${cityName},&appid=ab96154ce8f20e07812ea1417c9a0c0c`);
        const r1Json = await r1.json();
        

        // get lat lon from city name fetch
        const newLat = await r1Json[0].lat;
        const newLon = await r1Json[0].lon;
        myState =`
        https://api.openweathermap.org/data/2.5/forecast?lat=${newLat}&lon=${newLon}&appid=ab96154ce8f20e07812ea1417c9a0c0c` 

        //fetch by lat lon, city details
        const r2 = await fetch(myState)
        let r2Json = await r2.json();
        newData = await r2Json.list.filter(element => element.dt_txt.split('').splice(11).join('') === "12:00:00")
        setCityDetails(newData);
        
        // Fetch icons
        setIcons([]);
        const tempArr = [];
        newData.map((element, i) => {
            tempArr.push(`http://openweathermap.org/img/wn/${element.weather[0].icon}@4x.png`)
        })
        setIcons(tempArr)
        setWeatherCurrent({
            name: cityName, 
            temp: newData[0].main.temp,
            icon: icons[0],
            date: newData[0].dt_txt.split('').splice(0, 10).join(''),
            description: newData[0].weather[0].description
        })
        setWeather1({
            name: cityName, 
            temp: newData[1].main.temp,
            icon: icons[1],
            date: newData[1].dt_txt.split('').splice(0, 10).join(''),
            description: newData[1].weather[0].description
        })
        setWeather2({
            name: cityName, 
            temp: newData[2].main.temp,
            icon: icons[2],
            date: newData[2].dt_txt.split('').splice(0, 10).join(''),
            description: newData[2].weather[0].description
        })
        setWeather3({
            name: cityName, 
            temp: newData[3].main.temp,
            icon: icons[3],
            date: newData[3].dt_txt.split('').splice(0, 10).join(''),
            description: newData[3].weather[0].description
        })
        setWeather4({
            name: cityName, 
            temp: newData[4].main.temp,
            icon: icons[4],
            date: newData[4].dt_txt.split('').splice(0, 10).join(''),
            description: newData[4].weather[0].description
        })
    }
    
    const cityHandler = () => {
        //const cityName = cityRef.current.value;
        //fetchCityData(cityName);
        dispatch(favoritesListActions.addToFavorite(cityRef.current.value))
    }


    useEffect(() => {
        fetchCityData('tel-aviv');
    }, [])

    useEffect(() => {
       console.log('List: ', list) 
    }, [list])



    return(
        <div className={[style['content']]}>
            {/* Search field - city name */}
            <div className={style['favorites-container']}>
                <input className={style['input-city']} ref={cityRef} placeholder='Enter a city'/>
                {/* <img 
                    className={style['icon-favorites']} 
                    src={favorite}
                    onClick={cityHandler}
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                  onMouseEnter={() =>setHeartColor('gray')}
                  onMouseLeave={() => setHeartColor('black')}
                  width="28" height="28" viewBox="0 0 24 24"><path fillOpacity={1} fill={heartColor} d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
            </div>
            {/* <h1>{list}</h1> */}
             {/* Current weather */}
                <div className={style['grid-current']}>
                    <img src={icons[0]} className={style['test']}/>
                    <div className={style['deg-container']}>
                        <h3 className={style['namecurrent']}>{cityName}</h3>
                        <p className={style['deg-current']}>
                                 {cityDetails[0].main.temp}
                        </p>
                    </div>
                    <p className={[style['descreption']]}>{weatherCurrent.description}</p>
                </div>
                <div className={style['five-days-container']}>
                    <IconCard src={icons[1]} date={weather1.date}/>
                    <IconCard src={icons[2]} date={weather2.date}/>
                    <IconCard src={icons[3]} date={weather3.date}/>
                    <IconCard src={icons[4]} date={weather4.date}/>
                </div>
        </div>
        
    )
}