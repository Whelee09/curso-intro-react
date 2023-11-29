import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <MdOutlineCancel
        className={className}
        onClick={onClick}
    />
  )
}

export {DeleteIcon}
