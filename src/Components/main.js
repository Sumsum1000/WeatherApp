import style from './style.module.scss';
//---------------------------------------------
import { Bar } from './bar';
import { Content } from './content';
import { Favorites } from './Favorites/favorites';
//---------------------------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export const Main = () => {


    return(
      <div className={style['app-container']}>
        
        <Router>
            <Bar />
            <Routes>
                <Route path='/' element={ <Content />}/> 
                <Route path='/favorites' element={ <Favorites />}/>     
            </Routes>
        </Router>
      </div>
    )
}