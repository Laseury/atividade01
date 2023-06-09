//Coloque isso no terminal: npm install react-router-dom   
import { useState } from 'react'
import './App.css'
import RoutesAPP from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RoutesAPP/>
    </>
  )
}

export default App
