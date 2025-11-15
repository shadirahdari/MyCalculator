import React from 'react'
import CalcButton from './CalcButton'

const StandardPad = ({ standardButtons }) => (
  <div className="button-grid">
    {standardButtons.flat().map((btn, idx) => (
      <CalcButton
        key={btn.label + idx}
        className={btn.className}
        onClick={btn.onClick}
        {...(btn.extraProps || {})}
      >
        {btn.label}
      </CalcButton>
    ))}
  </div>
)

export default StandardPad
