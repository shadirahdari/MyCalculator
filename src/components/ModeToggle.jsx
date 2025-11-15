import React from 'react'

const ModeToggle = ({ mode, setMode, showHistory, setShowHistory }) => (
  <div className="mode-toggle">
    <div className="mode-left">
      <button
        className={`mode-button ${mode === 'standard' ? 'active' : ''}`}
        onClick={() => setMode('standard')}
      >
        Standard
      </button>
      <button
        className={`mode-button ${mode === 'engineering' ? 'active' : ''}`}
        onClick={() => setMode('engineering')}
      >
        Engineering
      </button>
    </div>
    <div className="mode-right">
      <button
        className={`mode-button history-button ${showHistory ? 'active' : ''}`}
        onClick={() => setShowHistory((s) => !s)}
        aria-label="Toggle history"
      >
        History
      </button>
    </div>
  </div>
)

export default ModeToggle
