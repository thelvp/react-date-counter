import { useState } from 'react';
import './styles.css';

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  const handleMinusSteps = () => {
    setStep((c) => c - 1);
  };

  const handlePlusSteps = () => {
    setStep((c) => c + 1);
  };

  const handleMinusCount = () => {
    setCount((c) => c - 1);
  };

  const handlePlusCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className='App'>
      <div>
        <div className='controls'>
          <button onClick={handleMinusSteps}>-</button>
          <p>Step: {step}</p>
          <button onClick={handlePlusSteps}>+</button>
        </div>
        <div className='controls'>
          <button onClick={handleMinusCount}>-</button>
          <p>Multiplied by: {count}</p>
          <button onClick={handlePlusCount}>+</button>
        </div>
      </div>
      <div>
        <p>
          Today it is {}. {} days from today it is: {}.
        </p>
      </div>
    </div>
  );
}
