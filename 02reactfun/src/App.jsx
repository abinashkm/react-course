import { useState } from 'react';
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(1);

  const AddValue = () => {
    setCounter(counter+1);
  }

  const SubValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Building our first practice app.</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={SubValue}>Remove Value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
