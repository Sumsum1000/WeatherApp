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
}) => {
  return (
    <div className={[style["favorite-city"]]} id={id}>
      <div className={[style["city-name"]]}>
        <button onClick={onClick}>x</button>
        <h3>{name}</h3>
      </div>

      <FavoriteDay src={src1} temp={temp1} />
      <FavoriteDay src={src2} temp={temp2} />
      <FavoriteDay src={src3} temp={temp3} />
      <FavoriteDay src={src4} temp={temp4} />
    </div>
  );
};
