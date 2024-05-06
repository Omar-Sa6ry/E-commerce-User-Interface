import React from 'react'
import '../css/Custom Input.css'

const CustomInput = props => {
  const {
    className,
    name,
    placeholder,
    type,
    onChange,
    value,
    onBlur,
    id,
    disabled
  } = props
  return (
    <input
      className={`input-contact ${className}`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default CustomInput
