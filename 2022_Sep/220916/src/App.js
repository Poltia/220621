
import './App.css';
import {paper, rock, scissors, rtc} from './imgs';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <div>Computer</div>
        <div className='com_rtc'><img src={rtc} /></div>
        <div className='com_rock'><img src={rock} /></div>
        <div className='com_paper'><img src={paper} /></div>
        <div className='com_scissors'><img src={scissors} /></div>
      </div>
      <div className='right'>
        <div>Player</div>
        <div className='user_rock'><img src={rock} /></div>
        <div className='user_paper'><img src={paper} /></div>
        <div className='user_scissors'><img src={scissors} /></div>
      </div>
    </div>
  );
}

export default App;
