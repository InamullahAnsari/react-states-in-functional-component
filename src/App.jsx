import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount((count) => count + 1);
  };

  const handleMinusClick = () => {
    setCount((count) => count - 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={handlePlusClick}>+</button>
      <button onClick={handleMinusClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;
