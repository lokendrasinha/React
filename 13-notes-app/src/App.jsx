import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(e)
  }
  return (
    <div  className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{submitHandler(e)}}
       className=" flex gap-4 lg:w-1/2 items-start flex-col p-10"  >
       <h1 className='text-3xl font-bold'>Add Notes</h1>
         <input 
        className='w-full px-5 py-2 border-2 rounded outline-none font-medium '
        type="text" 
        placeholder='Enter Notes Heading'
        />
        <textarea 
        className='w-full px-5 h-32 py-2 border-2 rounded outline-none flex items-start flex-row font-medium'
        type="text" 
        placeholder='Wrrite Details'
        />
        <button className='w-full font-medium bg-white text-black px-5 py-2 rounded outline-none' >Add Notes</button>
        
        
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10 bg-gray-950'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
         <div className='h-52 w-40 rounded-2xl bg-white'></div>
         <div className='h-52 w-40 rounded-2xl bg-white'></div>
         <div className='h-52 w-40 rounded-2xl bg-white'></div>
         
       </div>
      </div>
    </div>
  )
}

export default App