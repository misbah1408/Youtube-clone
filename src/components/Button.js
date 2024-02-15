import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='p-2 font-semibold hover:bg-gray-200 rounded-lg text-nowrap'>{name}</button>
    </div>
  )
}

export default Button
