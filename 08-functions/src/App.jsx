
import './index.css'

const App = () => {
  const btnClick=()=>{
    console.log("button clicked")
  }
  return (
    <div>
      <button className="border m-3 p-2" onClick={btnClick}>Click</button>
    </div>
  )
}

export default App