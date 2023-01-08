import style from "./favorites.module.scss";

export const FavoriteDay = ({ src, date, temp }) => {
  return (
    <div className={[style["next-day"]]}>
      <img src={src} />
      <div className={[style["temp-date"]]}>
        <p>{date}</p>
        <p>{temp}</p>
      </div>
    </div>
  );
};
