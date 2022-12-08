import style from './bar.module.scss';
//----------------------------------------
import { useNavigate } from 'react-router-dom';

export const Bar = () => {

    const nevigate = useNavigate();

    return(
        <nav className={[style['bar']]}>
            <p className={style['title']}>What's the weather ?</p>
            <div >
                <button 
                    className={style['button']}
                    onClick={() => nevigate('/')}
                >Main</button>
                <button 
                    className={style['button']}
                    onClick={() => nevigate('/favorites')}
                >Favorites</button>
            </div>
        </nav>
    )
}