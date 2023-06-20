const messages = ['Work on react projects', 'Work on data algorithms', 'Leverage the new skills'];

function App() {
  let step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button className="button-purp">Previous</button>
        <button className="button-purp">Next</button>
      </div>
    </div>
  );
}

export default App;
