import style from './bar.module.scss';

export const Bar = ({className}) => {


    return(
        <div className={style['bar']}>
            <p>What's the weather ?</p>
            <div >
                <button className={style['button']}>click 1</button>
                <button className={style['button']}>click 2</button>
            </div>
        </div>
    )
}