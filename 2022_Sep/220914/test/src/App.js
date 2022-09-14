// App.css 파일 가져오는 구문ㄱ
import './App.css';
// import Mycom from './compnents/Mycom'
import Calendar from './compnents/Calendar';

function App() {
  return (
    // <div className='App'>
    //   <Mycom name="찬" age="11개월" cName="one" />
    //   <Mycom name="순대" age="5살" cName="two" />
    //   <Mycom name="말이" age="4살" cName="three" />
    //   <Mycom name="무무" age="3살" cName="four" />
    // </div>
    <div className='body'>
      <h1> September </h1>
      <br />
      <div className='App'>
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar date="1" />
        <Calendar date="2" />
        <Calendar date="3" color="blue" />
        <Calendar date="4" color="red" />
        <Calendar date="5" />
        <Calendar date="6" />
        <Calendar date="7" />
        <Calendar date="8" />
        <Calendar date="9" />
        <Calendar date="10" color="blue" />
        <Calendar date="11" color="red" />
        <Calendar date="12" />
        <Calendar date="13" />
        <Calendar date="14" />
        <Calendar date="15" />
        <Calendar date="16" />
        <Calendar date="17" color="blue" />
        <Calendar date="18" color="red" />
        <Calendar date="19" />
        <Calendar date="20" />
        <Calendar date="21" />
        <Calendar date="22" />
        <Calendar date="23" />
        <Calendar date="24" color="blue" />
        <Calendar date="25" color="red" />
        <Calendar date="26" />
        <Calendar date="27" />
        <Calendar date="28" />
        <Calendar date="29" />
        <Calendar date="30" />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
