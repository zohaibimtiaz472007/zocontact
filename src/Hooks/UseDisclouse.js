import React from 'react'
import { useState } from 'react'

const UseDisclouse = () => {
    const [isOpen, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () =>{
    setOpen(false);
  }
  return (onOpen, onClose, isOpen)
}

export default UseDisclouse
