import React from 'react'
import '../css/Authorization.css'

const CustomInputAuth = props => {
  const { name, id, placeholder, value, onChange, onBlur, type, className } =
    props
  return (
    <input
      className={`inputLogin ${className}`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default CustomInputAuth
