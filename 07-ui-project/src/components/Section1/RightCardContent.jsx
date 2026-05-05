import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col  justify-between">
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse numquam neque officia blanditiis maiores?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600  font-medium px-7 py-3 rounded-full text-white '>{props.user.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><MoveRight /></button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent