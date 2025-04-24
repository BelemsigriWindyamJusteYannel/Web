/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
const Content = ({name}) => {
  return (
      <div>
        <h2> What's up {name}</h2>
      </div>
  )
}
const App = () => {
  return <div>
    <h2> Salutation </h2>
    <Content name = "Yannel"/>
    <Content name = "Rodrigue"/>
    <Content name = "Landry"/>
  </div>
}

export default App
