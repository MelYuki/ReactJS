// Import du CSS
import './App.css'
// Import du module nanoid
// Génère un ID unique qui comprendra 21 caractères, tel un UUID
import {nanoid} from 'nanoid'
// Import d'un component
import List from './components/list'

/*
ETABLIR UNE LISTE D'ELEMENTS,
AVEC UN NOM, UN PRIX ET LE TOUT EN ROUGE SI C'EST EN PROMO

Roadmap:
1) On créé notre liste d'éléments dans l'app
  - Import de nanoid pour donner un ID(UUID) auto-généré aux éléments de la liste
2) On créé un component pour construire le modèle d'un item de la liste (listItems):
  - Import de prop-types
  - Notre fonction ListItems avec (props) comme paramètre
  - Desctructuring des props nécessaire ici (nom, prix, promo)
  - Return de notre <li>...</li> avec la condition de style en inline
  - Typage des props
  - Export de notre component
3) On créé un autre component qui va établir notre liste d'items (list):
  - Import de prop-types et de ListItems
  - Notre fonction List avec (props) comme paramètre
  - 
*/

function App() {

  // Création de notre liste et de ses datas (Tableau d'objets)
  const list = [
    {
      id: nanoid(),
      nom: "Shuriken",
      prix: 14.99,
      promo: true
    },
    {
      id: nanoid(),
      nom: "Katana",
      prix: 799.99,
      promo: false
    },
    {
      id: nanoid(),
      nom: "Sandales Algériennes",
      prix: 6.99,
      promo: false
    },
    {
      id: nanoid(),
      nom: "Boule de neige",
      prix: 0.99,
      promo: true
    }
  ]

  return (
    <div>
      <h1>Choississez votre équipement pour le niveau suivant</h1>
      <List list={list}/>
    </div>
  )
}

export default App
