import style from './content.module.scss';
import placeholder from '../placeholder.jpg';

export const Content = ({className}) => {


    return(
        <div className={[style['content']]}>
            {/* Search field - city name */}
            {/* <input /> */}

             {/* Current weather */}
                <div className={[style['grid-current']]}>
                    <img src={placeholder} className={[style['test']]}/>
                    <h3 className={[style['namecurrent']]}>Tel-Aviv</h3>
                    <p className={[style['deg-current']]}>38c</p>

                    <img className={[style['icon-current']]} src={placeholder}/>
                    <button className={[style['btn-favorites']]}>Add to favorites</button>
                    {/* <p>Scattered clouds</p> */}
                </div>

                {/* 5 days weather */}
                {/* <img src={placeholder}/>
                <img src={placeholder}/>
                <img src={placeholder}/>
                <img src={placeholder}/>
                <img src={placeholder}/> */}


        </div>
        
    )
}