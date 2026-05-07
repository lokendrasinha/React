
import React, {useState} from 'react'

const App = () => {
  // const [num,setNum] = useState({user:'Rajat',age:20});
  // const [num,setNum] = useState([10,20,30])
  const [num,setNum] = useState(10)
  // const btnClicked = ()=>{
    // by using deconstructor
    // const newNum = {...num};
    // newNum.user = 'Lokendra';
    // newNum.age = 22;
    // setNum(newNum);

    // const newNum = [...num];
    // newNum.push(40)
    // setNum(newNum);

    // 
    // setNum(prev=>({...prev,age:50}));
//}

// BATCH UPDATE 
    // const btnClicked = ()=>{
    //     setNum(prev => (prev+1));
    //     setNum(prev => (prev+1));
    //     setNum(prev => (prev+1));
    // }

  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Me</button>
      

    </div>
  )
}

export default App