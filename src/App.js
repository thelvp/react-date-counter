import {useState} from 'react';
import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date('11 November 2024');
  date.setDate(date.getDate() + count);
  const dateConfig = {year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <div className='App'>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
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
      </div>
    </div>
  );
}
