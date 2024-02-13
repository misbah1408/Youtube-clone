import React from 'react'
import Button from './Button'

const ButtonList = () => {
    // const list = ["All", "Gaming", "Music", "Cricket", "Gaming shows", "Gaming shows", "Lofi",]
  return (
    <div className=' mt-5 flex gap-8'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Music"/>
      <Button name="Cricket"/>
      <Button name="Gaming shows"/>
      <Button name="Gaming shows"/>
    </div>
  )
}

export default ButtonList
