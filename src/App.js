//import './App.css';
import style from './style.module.scss';
import { Bar } from './Components/bar';
import { Content } from './Components/content';

function App() {
  return (
    // <div className="App">
        <div className={style['app-container']}>
            <Bar />
            <Content className={[style['content']]}/>
        </div>
    // </div>
  );
}

export default App;
