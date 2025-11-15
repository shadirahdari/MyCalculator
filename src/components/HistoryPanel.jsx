import React from 'react'

const HistoryPanel = ({ history, loadHistoryEntry, clearHistory, setShowHistory }) => (
  <div className="history-panel" role="region" aria-label="Calculation history">
    <div className="history-header">
      <strong>History</strong>
      <div className="history-controls">
        <button className="clear-history" onClick={clearHistory}>Clear</button>
        <button className="close-history" onClick={() => setShowHistory(false)} aria-label="Close history">✕</button>
      </div>
    </div>
    <div className="history-list">
      {history.length === 0 && <div className="history-empty">No history</div>}
      {history.map((entry, idx) => (
        <button key={idx} className="history-entry" onClick={() => loadHistoryEntry(entry)}>
          <div className="history-expr">{entry.expr}</div>
          <div className="history-res">= {entry.result}</div>
        </button>
      ))}
    </div>
  </div>
)

export default HistoryPanel
