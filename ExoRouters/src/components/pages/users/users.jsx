import { Link, Outlet } from "react-router-dom"

const Users = () => {

    const userId = 1

    return (
        <>
            <div>
                <h2>Welcome to the UsersPage</h2>

                <Link to={`${userId}`}>Me & I</Link>
            </div>
            <Outlet/>
        </>
    )
}

export default Users