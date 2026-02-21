import React from 'react'

export default function TemperatureControls({ onUp, onDown, onReset }) {
  return (
    <div className="temperature-controls">
      <button type="button" onClick={onDown} aria-label="Bajar temperatura">
        −
      </button>
      <button type="button" onClick={onReset} aria-label="Resetear temperatura">
        Reset
      </button>
      <button type="button" onClick={onUp} aria-label="Subir temperatura">
        +
      </button>
    </div>
  )
}
