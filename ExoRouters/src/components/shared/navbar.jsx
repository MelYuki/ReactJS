import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav style={ {display: "flex", flexDirection: "column"} }>
            <ul style={ {display:"flex", flexDirection: "row", justifyContent: "space-evenly", listStyle: "none"} }>
                <li> <Link to={"/"}>Home</Link> </li>
                <li> <Link to={"/users"}>Users</Link> </li>
                <li> <Link to={"/about"}>About</Link> </li>
                <li> <Link to={"/contact"}>Contact</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar