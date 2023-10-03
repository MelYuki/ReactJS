import { useState, useEffect } from 'react'

const Horloge = () => {
    const [time, setTime] = useState("")

    useEffect(() => {
        setInterval(() => {setTime(
            new Date().toLocaleTimeString())},
            200)
    })

    return(
        <>
            <h2>Vous avez l'heure</h2>
            <p>{time}</p>
            <h3>Nous avons le temps</h3>
        </>
    )
}

export default Horloge