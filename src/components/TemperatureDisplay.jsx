import React from 'react'

export default function TemperatureDisplay({ temperature }) {
  let message = ''
  let colorClass = ''

  if (temperature < 15) {
    message = '¡Hace frío!'
    colorClass = 'cold'
  } else if (temperature <= 25) {
    message = 'Temperatura agradable'
    colorClass = 'pleasant'
  } else {
    message = '¡Hace calor!'
    colorClass = 'hot'
  }

  return (
    <div className={`temperature-display ${colorClass}`}>
      <p className="temperature-value">{temperature} °C</p>
      <p className="temperature-message">{message}</p>
    </div>
  )
}
