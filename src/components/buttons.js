export const Buttons = ({step, setStep, count, setCount}) => {
  return (
    <div>
      <div className='controls'>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div className='controls'>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Multiplied by: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
    </div>
  );
};
