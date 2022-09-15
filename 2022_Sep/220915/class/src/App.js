
import './App.css';
//import Block from './components/Block';
import Box from './components/Box'
import {img01, img02} from './imgs';
/*
function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">*///
      {/*배열의 갯수만큼 반복하면서 컴포넌트 생성 및 props 전달*/}
      {/*arr.map((el) => (<Block num={el} />))*/}/*//

      <Block num={0} />
      
      <img src={img01}/>
      <img src={img02}/>
      </div>
      );
    }*/
    
function App() {
  let arr = [];
  for (let i=0; i<25; i++) {
    arr.push(i);
  }
  console.log(arr);

  let num = [];
  for (let j=0; j<20; j++) {
    let temp = Math.floor(Math.random()*25);
    if (!num.includes(temp)) {
      num.push(temp);
    }
    if (num.length === 5) break;
  }
  console.log(num)
  return (
    <div className='body'>
      {arr.map((el) => (<Box num={el} random={num} key={el} />))}
    </div>
  )
}

export default App;
