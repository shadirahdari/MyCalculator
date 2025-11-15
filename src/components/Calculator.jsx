


import React, { useState } from 'react'
import './Calculator.css'
import Display from './Display'
import ModeToggle from './ModeToggle'
import HistoryPanel from './HistoryPanel'
import EngineeringPad from './EngineeringPad'
import StandardPad from './StandardPad'
import { calculate } from '../lib/calc'
import { applyUnaryOperation } from '../lib/unary'



function Calculator() {
  // All state and logic here, but only render components below
  // ...existing state and logic...
  // (No layout or markup here)

  // --- State ---
  const [display, setDisplay] = useState('0')
  const [mode, setMode] = useState('standard')
  const [angleUnit, setAngleUnit] = useState('rad')
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  // --- Logic ---
  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }
  const applyUnary = (fn) => {
    const value = parseFloat(display)
    const result = applyUnaryOperation(value, fn, angleUnit)
    if (Number.isNaN(result) || !isFinite(result)) {
      setDisplay('Error')
    } else {
      const resStr = String(result)
      setDisplay(resStr)
      setWaitingForOperand(true)
      setHistory((h) => [{ expr: `${fn}(${value})`, result: resStr }, ...h.slice(0, 49)])
    }
  }
  const insertConstant = (constName) => {
    const val = constName === 'pi' ? Math.PI : Math.E
    if (waitingForOperand) { setDisplay(String(val)); setWaitingForOperand(false) }
    else { setDisplay(display === '0' ? String(val) : display + String(val)) }
  }
  const insertRandom = () => {
    const val = Math.random()
    if (waitingForOperand) { setDisplay(String(val)); setWaitingForOperand(false) }
    else { setDisplay(display === '0' ? String(val) : display + String(val)) }
  }
  const inputDecimal = () => {
    if (waitingForOperand) { setDisplay('0.'); setWaitingForOperand(false) }
    else if (display.indexOf('.') === -1) { setDisplay(display + '.') }
  }
  const clear = () => { setDisplay('0'); setPreviousValue(null); setOperation(null); setWaitingForOperand(false) }
  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)
    if (previousValue === null) { setPreviousValue(inputValue) }
    else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }
    setWaitingForOperand(true)
    setOperation(nextOperation)
  }
  // `calculate` is imported from `src/lib/calc.js`
  const handleEquals = () => {
    const inputValue = parseFloat(display)
    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      const newStr = String(newValue)
      setDisplay(newStr)
      const expr = `${previousValue} ${operation} ${inputValue}`
      setHistory((h) => [{ expr, result: newStr }, ...h.slice(0, 49)])
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }
  const loadHistoryEntry = (entry) => { setDisplay(String(entry.result)); setWaitingForOperand(true); setShowHistory(false) }
  const clearHistory = () => setHistory([])
  const handleDelete = () => { if (display.length > 1) { setDisplay(display.slice(0, -1)) } else { setDisplay('0') } }
  const standardButtons = [
    [
      { label: 'AC', className: 'button-clear', onClick: clear },
      { label: 'DEL', className: 'button-operation', onClick: handleDelete },
      { label: '÷', className: 'button-operation', onClick: () => performOperation('/') },
      { label: '×', className: 'button-operation', onClick: () => performOperation('*') },
    ],
    [
      { label: '7', className: 'button-number', onClick: () => inputNumber(7) },
      { label: '8', className: 'button-number', onClick: () => inputNumber(8) },
      { label: '9', className: 'button-number', onClick: () => inputNumber(9) },
      { label: '−', className: 'button-operation', onClick: () => performOperation('-') },
    ],
    [
      { label: '4', className: 'button-number', onClick: () => inputNumber(4) },
      { label: '5', className: 'button-number', onClick: () => inputNumber(5) },
      { label: '6', className: 'button-number', onClick: () => inputNumber(6) },
      { label: '+', className: 'button-operation', onClick: () => performOperation('+') },
    ],
    [
      { label: '1', className: 'button-number', onClick: () => inputNumber(1) },
      { label: '2', className: 'button-number', onClick: () => inputNumber(2) },
      { label: '3', className: 'button-number', onClick: () => inputNumber(3) },
      { label: '=', className: 'button-equals', onClick: handleEquals, extraProps: { style: { gridRow: 'span 2' } } },
    ],
    [
      { label: '0', className: 'button-number button-zero', onClick: () => inputNumber(0), extraProps: { style: { gridColumn: 'span 2' } } },
      { label: '.', className: 'button-number', onClick: inputDecimal },
    ],
  ]

  // --- Render: restore layout and grid wrappers ---
  return (
    <div className="calculator-container">
      <div className={`calculator${mode === 'engineering' ? ' engineering' : ''}`}>
        <ModeToggle mode={mode} setMode={setMode} showHistory={showHistory} setShowHistory={setShowHistory} />
        <Display value={display} />
        {showHistory && (
          <HistoryPanel
            history={history}
            loadHistoryEntry={loadHistoryEntry}
            clearHistory={clearHistory}
            setShowHistory={setShowHistory}
          />
        )}
        {mode === 'engineering' && (
          <EngineeringPad
            applyUnary={applyUnary}
            insertConstant={insertConstant}
            insertRandom={insertRandom}
            angleUnit={angleUnit}
            setAngleUnit={setAngleUnit}
            performOperation={performOperation}
          />
        )}
        <StandardPad standardButtons={standardButtons} />
      </div>
    </div>
  )
}

export default Calculator

