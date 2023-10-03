import PropTypes from "prop-types"

const ListItems = (props) => {

    const { nom, prix, promo } = props

    return (
        <li>
            <h3>
                <span style = { promo ? {color:"red"} : {color:"white"} }>
                    {nom} : {prix} €
                </span>
            </h3>
        </li>
    )
}

ListItems.propTypes = {
    nom: PropTypes.string,
    prix: PropTypes.number,
    promo: PropTypes.bool
}

export default ListItems