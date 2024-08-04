import {useState} from 'react';
import './styles.css';
import {useNumbers} from './hooks/useNumbers';

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const multiplication = step * count; // 'daysToAdd' ->Variable amount of days to add
  const multiplicationWord = useNumbers(multiplication);
  const today = new Date(); // today as date object
  const dateConfig = {year: 'numeric', month: 'long', day: 'numeric'};

  // Function to add a specified number of days to a date
  const addDays = (date, days) => {
    const newdate = new Date(date);
    newdate.setDate(newdate.getDate() + days);
    return newdate;
  };

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
          Today it is {today.toLocaleDateString('en-US', dateConfig)}.{' '}
          {step
            ? `${multiplicationWord} ${
                multiplicationWord === 'One' ? 'day' : 'days'
              } from today it is: ${addDays(
                today,
                multiplication
              ).toLocaleDateString('en-US', dateConfig)}.`
            : null}
        </p>
      </div>
    </div>
  );
}
