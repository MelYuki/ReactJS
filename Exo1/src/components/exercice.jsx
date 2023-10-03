// Import du module de typage PropTypes
import PropTypes from "prop-types"

// 1ere chose à faire au début de chaque component (module externe)
const Exercice = (props) => {
    // Destructuring des props
    const {name, age} = props

    return (
        // Important d'encadrer notre html par des <> ou <div>,
        // quand il y a plus de deux balises
        <>
            <section>
                <p>Bienvenu {name} sur l'app React!</p>
                <p>Vous avez {age} ans!</p>
            </section>
            <section>
                {/* Pour l'exemple */}
            </section>
        </>
    )
}

// Valeur par defaut pour le prop age
Exercice.defaultProps = {
    age: 18
}

// Définition des props-types
Exercice.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

// Export de notre module
export default Exercice