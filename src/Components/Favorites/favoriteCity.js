import style from "./favorites.module.scss";
import { FavoriteDay } from "./favoriteDay";

export const FavoriteCity = ({
  id,
  name,
  src1,
  src2,
  src3,
  src4,
  temp1,
  temp2,
  temp3,
  temp4,
  onClick,
  date1,
  date2,
  date3,
  date4,
}) => {
  return (
    <div className={[style["favorite-city"]]} id={id}>
      <div className={[style["city-name"]]}>
        <button onClick={onClick}>x</button>
        <h3>{name}</h3>
      </div>
      <FavoriteDay src={src1} temp={temp1} date={date1} />
      <FavoriteDay src={src2} temp={temp2} date={date2} />
      <FavoriteDay src={src3} temp={temp3} date={date3} />
      <FavoriteDay src={src4} temp={temp4} date={date4} />
    </div>
  );
};
