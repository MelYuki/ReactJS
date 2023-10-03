const Child = (props) => {

    const { firstname, changeName } = props;

    const handleChangeName = (e) => {
        e.preventDefault();

        changeName('Gulain');
    }


    return(
        <>
            <p>{firstname}</p>
            <button onClick={handleChangeName}>Change me !</button>
        </>
    )
}

export default Child;