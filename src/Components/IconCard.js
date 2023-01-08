import style from "./iconCard.module.scss";

export const IconCard = ({ src, date, temp }) => {
  return (
    <div className={style["icon-container"]}>
      <img src={src} className={style["five-days-img"]} />
      <div className={style["line-bottom"]} />
      <div className={style["next-days-container"]}>
        <p className={style["deg"]}>{`${temp} C`}</p>
        <p className={style["deg-o"]}>o</p>
        <p className={style["date"]}>{date}</p>
      </div>
    </div>
  );
};
