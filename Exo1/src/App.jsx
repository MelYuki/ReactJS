// Import du CSS
import './App.css'
// S'importe automatiquement à l'inclusion dans le return de l'app()
import Exercice from './components/exercice'

function App() {
  return (
    // Inclusion du component Exercice
    <Exercice name={"Melvin"} age={34}/>
  )
}

// Export obligatoire pour tous JSX
export default App
