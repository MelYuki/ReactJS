// Import du module pour typer nos props
import PropTypes from 'prop-types';

// Création d'une const pour utiliser nos inputs
const Inputs = (props) => {

    // Destructuring des props à use
    const { type, value, name, setValues, disabled } = props;
        // Le disable empeche le user d'interagir directement avec cet input

    // On retourne le modele de nos inputs
    return(
        <>
        <label htmlFor={name} /> {name}
        <input type={type} name={name} onChange={(e) => setValues(e.target.value)} value={value} disabled={disabled}/>
        </>
    )
}

Inputs.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    setValues: PropTypes.func,
    disabled: PropTypes.bool
}

export default Inputs;
