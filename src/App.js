import { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <div>
        <div className='controls'>
          <button>-</button>
          <p>Step: {}</p>
          <button>+</button>
        </div>
        <div className='controls'>
          <button>-</button>
          <p>Count: {}</p>
          <button>+</button>
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
