import React from 'react'
import CalcButton from './CalcButton'

const EngineeringPad = ({ applyUnary, insertConstant, insertRandom, angleUnit, setAngleUnit, performOperation }) => (
  <div className="eng-grid">
    <CalcButton className="button-scientific" onClick={() => applyUnary('sin')}>sin</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('cos')}>cos</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('tan')}>tan</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('ln')}>ln</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('log')}>log</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('sqrt')}>√</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('square')}>x²</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('reciprocal')}>1/x</CalcButton>
    <CalcButton className="button-scientific" onClick={() => applyUnary('fact')}>!</CalcButton>
    <CalcButton className="button-scientific" onClick={() => insertConstant('pi')}>π</CalcButton>
    <CalcButton className="button-scientific" onClick={() => insertConstant('e')}>e</CalcButton>
    <CalcButton className="button-scientific" onClick={insertRandom}>Rand</CalcButton>
    <CalcButton className="button-scientific" onClick={() => setAngleUnit(angleUnit === 'rad' ? 'deg' : 'rad')}>
      {angleUnit === 'rad' ? 'Rad' : 'Deg'}
    </CalcButton>
    <CalcButton className="button-scientific" onClick={() => performOperation('^')}>x^y</CalcButton>
  </div>
)

export default EngineeringPad
