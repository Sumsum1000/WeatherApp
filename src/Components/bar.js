import style from './bar.module.scss';
//----------------------------------------
import { useNavigate } from 'react-router-dom';

export const Bar = ({className}) => {

    const nevigate = useNavigate();

    return(
        <div className={style['bar']}>
            <p>What's the weather ?</p>
            <div >
                <button 
                    className={style['button']}
                    onClick={() => nevigate('/favorites')}
                >Main</button>
                <button 
                    className={style['button']}
                    onClick={() => nevigate('/')}
                >Favorites</button>
            </div>
        </div>
    )
}