import  { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const appendNumber = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const appendOperator = (operator) => {
    if (input !== '' && !isNaN(input[input.length - 1])) {
      setInput((prevInput) => prevInput + operator);
    }
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setResult(result);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        <button className="button" onClick={() => appendNumber('7')}>7</button>
        <button className="button" onClick={() => appendNumber('8')}>8</button>
        <button className="button" onClick={() => appendNumber('9')}>9</button>
        <button className="button" onClick={() => appendOperator('+')}>+</button>
        <button className="button" onClick={() => appendNumber('4')}>4</button>
        <button className="button" onClick={() => appendNumber('5')}>5</button>
        <button className="button" onClick={() => appendNumber('6')}>6</button>
        <button className="button" onClick={() => appendOperator('-')}>-</button>
        <button className="button" onClick={() => appendNumber('1')}>1</button>
        <button className="button" onClick={() => appendNumber('2')}>2</button>
        <button className="button" onClick={() => appendNumber('3')}>3</button>
        <button className="button" onClick={() => appendOperator('*')}>*</button>
        <button className="button" onClick={() => appendNumber('0')}>0</button>
        <button className="button" onClick={clearInput}>C</button>
        <button className="button" onClick={calculate}>=</button>
        <button className="button" onClick={() => appendOperator('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
