import React, { useState, useEffect } from 'react'
import './App.css'
import TemperatureDisplay from './components/TemperatureDisplay'
import TemperatureControls from './components/TemperatureControls'
import HistoryList from './components/HistoryList'

const STORAGE_KEY = 'temperature-history'
const MIN_TEMP = 0
const MAX_TEMP = 40
const INITIAL_TEMP = 20

function loadHistory() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return []
    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  } catch {}
}

export default function App() {
  const [temperature, setTemperature] = useState(INITIAL_TEMP)
  const [history, setHistory] = useState(loadHistory)

  useEffect(() => {
    saveHistory(history)
  }, [history])

  function addToHistory(newTemp) {
    setHistory((prev) => [...prev, { timestamp: Date.now(), temperature: newTemp }])
  }

  function handleUp() {
    if (temperature < MAX_TEMP) {
      const newTemp = temperature + 1
      setTemperature(newTemp)
      addToHistory(newTemp)
    }
  }

  function handleDown() {
    if (temperature > MIN_TEMP) {
      const newTemp = temperature - 1
      setTemperature(newTemp)
      addToHistory(newTemp)
    }
  }

  function handleReset() {
    setTemperature(INITIAL_TEMP)
    setHistory([])
  }

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        onUp={handleUp}
        onDown={handleDown}
        onReset={handleReset}
      />
      <HistoryList history={history} />
    </div>
  )
}
