import style from "./favorites.module.scss";

export const FavoriteDay = ({ src, date, temp }) => {
  return (
    <div className={[style["next-day"]]}>
      <img src={src} />
      <div className={[style[""]]}>
        {/* <p>{date}</p> */}
        <p>{`${temp}C`}</p>
        <p className={[style["deg-o2"]]}>o</p>
        <p className={[style["spacer"]]}>|</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
