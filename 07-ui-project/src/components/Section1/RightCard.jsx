import React from 'react'
import RightCardContent from './RightCardContent.jsx'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0'>
        <img className='  h-full w-full object-cover brightness-70 ' src={props.user.img} alt="" />
        <RightCardContent key={props.key} id={props.id} user={props.user} />
    </div>
  )
}

export default RightCard