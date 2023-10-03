import { useState } from 'react'
import { useEffect } from 'react'
// import { useState, useEffect } from 'react'
import './App.css'

import Horloge from './components/horloge'
import DateDuJour from './components/dateDuJour'

function App() {
  const [count, setCount] = useState(0)

  const [time, setTime] = useState(false)
  const [date, setDate] = useState(false)

  useEffect(() => {
    console.log(`Vous avez cliquer: ${count} fois`)
  }, [count])

  const displayTime = () => {
    setTime(!time)
    setDate(false)
  }
  const displaydate = () => {
    setDate(!date)
    setTime(false)
  }

  return (
    <>
      <div>
        <h1>Exemple</h1>
        <button type='button' onClick={() => setCount(c => c+1)}>Click me</button>
      </div>

      <div>
        <h1>Horloge ou date du jour?</h1>
        <button type='button' value="horloge" onClick={displayTime}>
        L'heure?
        </button>
        &nbsp;
        OU
        &nbsp;
        <button type='button' value="date" onClick={displaydate}>
          La date?
        </button>
        {time ? <Horloge/> : null}
        {date ? <DateDuJour/> : null}
      </div>
    </>
  )
}

/*
- Component Horloge
  => <p> affiche le temps du chrono format hh:mm:ss
  => refresh auto toutes les 200 millis
- Component DateDuJour
  => <p> affiche la date format fr dd mm yyyy
- Import des components dans l'app
  => <button> qui permet d'alterner entre les affichages
*/

export default App
