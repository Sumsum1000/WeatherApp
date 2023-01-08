export const fetchCity = async (cityName) => {
  const days = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=
        ${cityName},&appid=ab96154ce8f20e07812ea1417c9a0c0c`);
  const daysData = await days.json();
  return daysData;
};

export const fetchCityData = async (data) => {
  const newLat = await data[0].lat;
  const newLon = await data[0].lon;
  const cityDataUrl = `
        https://api.openweathermap.org/data/2.5/forecast?lat=${newLat}&lon=${newLon}&appid=ab96154ce8f20e07812ea1417c9a0c0c`;

  const result = await fetch(cityDataUrl);
  const result2 = await result.json();
  return result2;
};

export const extractHours = async (data) => {
  const newData = await data.list.filter(
    (element) => element.dt_txt.split("").splice(11).join("") === "12:00:00"
  );
  return newData;
};

export const finalCityData = (data, cityName) => {
  const tempCity = {
    name: cityName,
    days: [
      {
        temp: data[0].main.temp,
        icon: data[0].weather[0].icon,
        date: data[0].dt_txt.split("").splice(0, 10).join(""),
        description: data[0].weather[0].description,
      },
      {
        temp: data[1].main.temp,
        icon: data[1].weather[0].icon,
        date: data[1].dt_txt.split("").splice(0, 10).join(""),
        description: data[1].weather[0].description,
      },
      {
        temp: data[2].main.temp,
        icon: data[2].weather[0].icon,
        date: data[2].dt_txt.split("").splice(0, 10).join(""),
        description: data[2].weather[0].description,
      },
      {
        temp: data[3].main.temp,
        icon: data[3].weather[0].icon,
        date: data[3].dt_txt.split("").splice(0, 10).join(""),
        description: data[3].weather[0].description,
      },
      {
        temp: data[4].main.temp,
        icon: data[4].weather[0].icon,
        date: data[4].dt_txt.split("").splice(0, 10).join(""),
        description: data[4].weather[0].description,
      },
    ],
  };
  return tempCity;
};
