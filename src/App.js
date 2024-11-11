import {useState} from 'react';
import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date('11 November 2024');
  date.setDate(date.getDate() + count);
  const dateConfig = {year: 'numeric', month: 'long', day: 'numeric'};

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div className='App'>
      <div>
        <input
          type='range'
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))} // Target.value is string, so convert back to number
        />
        <span>Plus: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        <p>
          <span>
            {count === 0
              ? 'Today is '
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toLocaleDateString('en-US', dateConfig)}.</span>
        </p>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
