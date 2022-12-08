import style from './iconCard.module.scss';

export const IconCard = ({src, date}) => {


    return(
        <div className={style['icon-container']}>
            <img src={src} className={style['five-days-img']}/>
            <div className={style['line-bottom']} />
            <div className={style['next-days-container']}>
                <p className={style['deg']}>266</p>
                <p className={style['date']}>{date}</p>
            </div>
        </div>
    )
}