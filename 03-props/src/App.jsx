import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
      <Card user='Lokendra' age={22} img="https://images.unsplash.com/photo-1773853430943-5826d01813ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"/>
      <Card user='Mohnish' age={29} img="https://images.unsplash.com/photo-1776781205743-33b4c1106adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"/>
      <Card user='Rohan' age={26} img="https://images.unsplash.com/photo-1772927253232-91fb2e5c30b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App