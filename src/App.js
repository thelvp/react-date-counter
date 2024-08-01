import { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export const Counter = () => {
  const [step, setStep] = useState(1); // increment
  const [count, setCount] = useState(0); // how many times
  const today = new Date(); // today's date
  // TODO: add new date function

  const decreaseStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const increaseStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const decreaseCount = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const increaseCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  // FIXME: fix everything so it works :')
  return (
    <>
      <div>
        <button onClick={decreaseStep()}>-</button>
        <p>Step: {step}</p>
        <button onClick={increaseStep()}>+</button>
      </div>
      <div>
        <button onClick={decreaseCount()}>-</button>
        <p>Count: {count}</p>
        <button onClick={increaseCount()}>+</button>
      </div>
      <div>
        <p>
          Today it is {today.toLocaleDateString()}. {step * count} days from
          today it is: {}.
        </p>
      </div>
    </>
  );
};

// PSEUDO CODE
// 1. Add text
// 2. Add date
// 3. Add counter function
// 4. Add step (increment) function
