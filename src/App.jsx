import { useState } from 'react'
import './App.css'
import ToggleButton from './components/ToggleButton'

function App() {

  const [isChanged,setIsChanged] = useState(false)

  const change = () => {
    setIsChanged(!isChanged)
  }

  return (
    <ToggleButton />
  )
}

export default App
