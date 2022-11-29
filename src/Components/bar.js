import style from './bar.module.scss';
//----------------------------------------
import { useNavigate } from 'react-router-dom';

export const Bar = () => {

    const nevigate = useNavigate();

    return(
        <header className={[style['bar']]}>
            <p>What's the weather ?</p>
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
        </header>
    )
}