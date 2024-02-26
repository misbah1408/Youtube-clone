import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-1 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg text-nowrap'>{name}</button>
    </div>
  )
}

export default Button
