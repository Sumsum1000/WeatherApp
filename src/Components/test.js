import { useEffect, useState, useRef } from "react";

export const Test = () => {
  const ref = useRef();
  const [listData, setListData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchCity = async (cityName) => {
    const days = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=
        ${cityName},&appid=ab96154ce8f20e07812ea1417c9a0c0c`);
    const daysData = await days.json();
    return daysData;
  };

  const fetchCityData = async (data) => {
    const newLat = await data[0].lat;
    const newLon = await data[0].lon;
    const cityDataUrl = `
        https://api.openweathermap.org/data/2.5/forecast?lat=${newLat}&lon=${newLon}&appid=ab96154ce8f20e07812ea1417c9a0c0c`;

    const result = await fetch(cityDataUrl);
    const result2 = await result.json();
    return result2;
  };

  const extractHours = async (data) => {
    const newData = await data.list.filter(
      (element) => element.dt_txt.split("").splice(11).join("") === "12:00:00"
    );
    return newData;
  };

  const finalCityData = (data, cityName) => {
    const tempCity = {
      name: cityName,
      days: [
        // Change to map
        {
          temp: data[0].main.temp,
          //icon: icons[0],
          date: data[0].dt_txt.split("").splice(0, 10).join(""),
          description: data[0].weather[0].description,
        },
        {
          temp: data[1].main.temp,
          //icon: icons[1],
          date: data[1].dt_txt.split("").splice(0, 10).join(""),
          description: data[1].weather[0].description,
        },
        {
          temp: data[2].main.temp,
          //icon: icons[2],
          date: data[2].dt_txt.split("").splice(0, 10).join(""),
          description: data[2].weather[0].description,
        },
        {
          temp: data[3].main.temp,
          //icon: icons[3],
          date: data[3].dt_txt.split("").splice(0, 10).join(""),
          description: data[3].weather[0].description,
        },
        {
          temp: data[4].main.temp,
          //icon: icons[4],
          date: data[4].dt_txt.split("").splice(0, 10).join(""),
          description: data[4].weather[0].description,
        },
      ],
    };
    return tempCity;
  };

  const fetchDays = async (cityName) => {
    const cityData = await fetchCity(cityName);
    const allData = await fetchCityData(cityData);
    const extractData = await extractHours(allData);
    const finalData = finalCityData(extractData, cityName);
    setFavorites([...favorites, cityName]);
    setListData([...listData, finalData]);
    ref.current.value = "";
  };

  useEffect(() => {
    console.log("listData ", listData);
  }, [listData]);

  useEffect(() => {
    console.log("favorites ", favorites);
  }, [favorites]);

  return (
    <div>
      <input ref={ref} />
      <button onClick={() => fetchDays(ref.current.value)}>Add</button>
    </div>
  );
};
