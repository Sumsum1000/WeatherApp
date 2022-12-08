export const fetchCityStart = async(cityName) => {
        const r1 = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=
        ${cityName},&appid=ab96154ce8f20e07812ea1417c9a0c0c`);
        return r1.json();
}

