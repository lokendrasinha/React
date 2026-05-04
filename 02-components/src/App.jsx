import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'


const App = () => {
  const user = 'Rajat'
  const age = 25
  return (
    <div>
      <NavBar />
      <NavBar />
      <Card />
      <Card />
    </div>
  )
}

export default App