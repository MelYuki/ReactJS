import './App.css'

// Créa du router (Routes, route)
import { Routes, Route } from "react-router-dom"
// Import des composants pour les routes
import Tasks from "./components/tasks/tasks"
import DetailsTask from './components/detailsTask/detailsTask'

// BONUS MAJEUR POUR LA REUSSITE DE L'EXO:
// DU STYLE !! (lol)

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Tasks/> } />
        <Route path="/details/:id" element={ <DetailsTask/>} />
      </Routes>
    </>
  )
}

export default App
