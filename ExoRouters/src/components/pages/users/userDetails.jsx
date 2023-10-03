import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {

    const { userId } = useParams()
    const [ user, setUser ] = useState("")

    useEffect (() => {
        if(userId === "1") {
            setUser("I am the univers")
        }
    }, [userId])

    return (
        <>
            <h2> {user} </h2>
        </>
    )
}

export default UserDetails