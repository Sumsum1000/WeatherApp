import style from "./favorites.module.scss";
import { FavoriteCity } from "./favoriteCity";
import { useSelector, useDispatch } from "react-redux";
import { favoritesDataActions, favoritesListActions } from "../Store/store";

export const Favorites = ({ className }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cityData);

  const handleRemove = (id, name) => {
    console.log("Removed");
    dispatch(favoritesDataActions.removeFavoritesData(id));
    dispatch(favoritesListActions.removeFromFavorites(name));
  };

  return (
    <div className={[style["favorites"]]}>
      {favorites.length === 0 ? (
        <p className={[style["empty-favorites"]]}>
          Let's add some fovorites cities...
        </p>
      ) : (
        favorites.map((city) => {
          return (
            <FavoriteCity
              id={city.id}
              onClick={() => handleRemove(city.id, city.name)}
              name={city.name}
              temp1={city.days[0].temp}
              temp2={city.days[1].temp}
              temp3={city.days[2].temp}
              temp4={city.days[3].temp}
              date1={city.days[0].date}
              date2={city.days[1].date}
              date3={city.days[2].date}
              date4={city.days[3].date}
              src1={`http://openweathermap.org/img/wn/${city.days[0].icon}@4x.png`}
              src2={`http://openweathermap.org/img/wn/${city.days[1].icon}@4x.png`}
              src3={`http://openweathermap.org/img/wn/${city.days[2].icon}@4x.png`}
              src4={`http://openweathermap.org/img/wn/${city.days[3].icon}@4x.png`}
            />
          );
        })
      )}
    </div>
  );
};
