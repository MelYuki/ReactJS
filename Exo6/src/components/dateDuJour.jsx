const DateDuJour = () => {
    const date = new Date().getDate()
    const month = new Date().getMonth()+1
    const year = new Date().getFullYear()

    const today = `${date}/${month}/${year}`

    return(
        <>
            <h2>Vous avez la date du jour</h2>
            <p>{today}</p>
        </>
    )
}

export default DateDuJour