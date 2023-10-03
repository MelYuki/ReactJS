import PropTypes from "prop-types"
import ListItems from "./listItems";

const List = (props) => {

    const listItems = props.list.map(
        (e) => <ListItems key={ e.id } { ...e }/>
    )

    return (
        <ul>
            {listItems}
        </ul>
    )
}

List.propTypes = {
    list: PropTypes.array
}

export default List 