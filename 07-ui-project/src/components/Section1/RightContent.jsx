import React from 'react'
import RightCard from './RightCard.jsx'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto w-2/3 p-6 flex flex-nowrap gap-10'>
        {props.users.map((user,idx) => (
            <RightCard key={idx} id={idx} user={user} />
        ))}
    </div>
  )
}

export default RightContent