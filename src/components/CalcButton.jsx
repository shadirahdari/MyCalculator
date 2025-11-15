import React from 'react'

const CalcButton = ({ className, onClick, children, ...rest }) => (
  <button className={`button ${className || ''}`} onClick={onClick} {...rest}>
    {children}
  </button>
)

export default CalcButton
