import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h2>Add Remove To Cart And Local Storage With React</h2>
      <Books></Books>
      
    </>
  )
}

export default App
