import './App.css'
import Todo from './components/todo'

function App() {

  return (
    <Todo />

    // Roadmap :
    /* 
      1) Créer les composants dont je SAIS que je vais avoir besoin
      2) Création du formulaire - 
        a) Props qu'on va recevoir - setState (qui sera définit dans le parent)
        b) Créer le formulaire en JSX (dans le return)
        c) Créer un state qui va contenir les inputs utilisateurs
        d) Créer une fonction qui va envoyer le state inputs dans le parent (via le prop setState)
      3) Création du parent
        a) Créer le state qui va gérer la liste des tâches envoyées par le form (sous forme d'array)
        b) Appel du composant Form dans le JSX et transfert du prop setState (sous le même nom ou pas)
      4) Création de la liste 
        a) Récupération des props qu'on va recevoir du parent - state / setState
        b) Création d'une liste en JSX (.map())
      5) Retour au parent
        a) Appel du composant List dans le JSX et transfert des props state et setState (sous le même nom ou pas)
      6) Retour à la liste
        a) Création des fonctions de modifications et de suppression des éléments du state au clic de boutons
    */
  )
}

export default App
