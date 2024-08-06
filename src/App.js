import {useState} from 'react';
import './styles.css';
import {addDays} from './hooks/addDays';
import {renderMessage} from './hooks/renderMessage';
import {Buttons} from './components/buttons';

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const multiplication = step * count;
  const today = new Date();
  const dateConfig = {year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <div className='App'>
      <Buttons
        step={step}
        setStep={setStep}
        count={count}
        setCount={setCount}
      />
      <div>
        <p>
          <span>
            Today it is {today.toLocaleDateString('en-US', dateConfig)}.
          </span>

          <span> {renderMessage(multiplication)} </span>
          <span>
            {step !== 0
              ? `${addDays(today, multiplication).toLocaleDateString(
                  'en-US',
                  dateConfig
                )}.`
              : ''}
          </span>
        </p>
      </div>
    </div>
  );
}
