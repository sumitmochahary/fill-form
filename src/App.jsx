import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {

  const [isChanged,setIsChanged] = useState(false)

  const change = () => {
    setIsChanged(!isChanged)
  }

  return (
    <div>
      {isChanged ? <button onClick={change}>Fill Form</button> : <Form />}
    </div>
  );
}

export default App
