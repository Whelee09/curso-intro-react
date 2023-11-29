import React from "react";
import { BiCheckCircle } from "react-icons/bi";
 
const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <BiCheckCircle
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}