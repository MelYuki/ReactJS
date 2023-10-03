import { useState } from 'react'
import './App.css'

/*
CREER UN COMPTEUR AVEC DEUX BOUTONS.
LE PREMIER AUGMENTE DE 1 A CHAQQUE CLIC,
LE SECOND REMET LE COMPTEUR A ZERO.

Roadmap:
1) Import de useState qui permettra de stocker la valeur du compteur
2) On crée la const useState dans l'app
  - [count, ...
  - setCount] ...
  - useState(0) ...
3) On construit notre Return
4) Action onClick de l'augmentation du compteur dans la balise du premier button
5) Affichage de l'état du compteur entre les balises du même button
6) Action onClick de remise à zéro du second button
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Compteur</h1>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </p>
      <p>
        <button onClick={() => setCount(() => 0)}>
          back to 0?
        </button>
      </p>
    </>
  )
}

export default App
