import { useState } from "react";

function App() {
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  const clearInput = () => {
    setInput('');
    setResult('');
    console.log('silindi')
  };
  const handleInput = (value) => {
    setInput(input + value);
  };
  const delLast  = () => {
    setInput(input.slice(0, -1));
  };
  const hesapResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Hesaplama hatası');
    }
  };

  return  (


<div   className="App" id="hesapmakinesi">
  <h1>SONUÇ</h1>
  
      <div className="top" >
      <div className="result">{result}</div>
        <input type="text" value={input}  disabled/>
        <button onClick={clearInput}  className="silme" >C </button>
        <button onClick={() => delLast()} className="sondansil">CE</button>
      </div>
      <div  className="tuslar">
  <button  onClick={() => handleInput(7)} className="numbers" value="7" >7</button>
  <button onClick={() => handleInput(8)}  className="numbers" value="8" >8</button>
  <button onClick={() => handleInput(9)} className="numbers" value="9" >9</button>
  <button onClick={() => handleInput('/')} className="bolu islem">/</button>
  <br></br> 
  <button onClick={() => handleInput(4)} className="numbers" value="4" >4</button>
  <button onClick={() => handleInput(5)} className="numbers" value="5" >5</button>  
  <button onClick={() => handleInput(6)} className="numbers" value="6" >6</button>
  <button onClick={() => handleInput('*')} className="carpi islem">X</button>
  <br></br>
  <button onClick={() => handleInput(1)} className="numbers" value="1" >1</button>
  <button onClick={() => handleInput(2)} className="numbers" value="2" >2</button>
  <button onClick={() => handleInput(3)} className="numbers" value="3" >3</button>
  <button onClick={() => handleInput('-')} className="eksi islem">-</button>
  <br></br>
  <button onClick={() => handleInput(0)} className="numbers">0</button>
  <button onClick={() => handleInput('.')} className="numbers">,</button>
  <button onClick={hesapResult} className="esittir islem" >=</button>
  <button onClick={() => handleInput('+')} className="arti islem">+</button>
  


{/* {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', ].map((value) => (
          <button key={value} onClick={() => handleInput(value)}>
            {value}
          </button>          
        ))}
        <button  className="esittir islem">=</button>
        <button  className="bolu islem">/</button> */}
      </div>
    </div>


   
  );
}












export default App;
