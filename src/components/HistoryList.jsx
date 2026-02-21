import React from 'react'

export default function HistoryList({ history }) {
  const list = Array.isArray(history) ? history : []

  return (
    <div className="history-list">
      <h3>Historial</h3>
      {list.length === 0 ? (
        <p className="history-empty">Sin cambios aún</p>
      ) : (
        <ul>
          {list.map((item, index) => {
            const time = item.timestamp
              ? new Date(item.timestamp).toLocaleTimeString('es-ES', { hour12: false })
              : item.time || '--:--:--'
            return (
              <li key={index}>
                [{time}] → {item.temperature} °C
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
