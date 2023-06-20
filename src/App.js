import { useState } from 'react';

const messages = ['Work on react projects', 'Work on data algorithms', 'Leverage my new skills'];

function App() {
  let [step, setStep] = useState(1);

  function handlePrev() {
    if (step >= 1) setStep(step--);
  }

  function handleNext() {
    if (step <= 3) setStep(step++);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button className="button-purp" onClick={handlePrev}>
          Previous
        </button>
        <button className="button-purp" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
