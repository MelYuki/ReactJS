import { useSelector,useDispatch } from "react-redux"
import { incrementAction, decrementAction, resetAction } from "../store/actions/increment-actions"
import { useState } from "react"

const Counter = () => {

    const [ userInput, setUserInput ] = useState("")

    const count = useSelector(state => state.counter.count)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementAction(1))
    }

    const handleDecrement = () => {
        dispatch(decrementAction(1))
    }

    const handleUserIncrement = () => {
        let userInt = parseInt(userInput)
        dispatch(incrementAction(userInt))
    }

    const handleUserDecrement = () => {
        let userInt = parseInt(userInput)
        dispatch(decrementAction(userInt))
    }

    const handleReset = () => {
        dispatch(resetAction())
    }

    return(
        <>
            <h1>COUNTER : {count}</h1>

            <h2>First Counter by 1</h2>
            <button onClick={handleIncrement}> +1 </button>
            <button onClick={handleDecrement}> -1 </button>
            <br/>

            <h2>Second Counter by User</h2>
            <input type="text" placeholder="Your number ?" onChange={ (e) => setUserInput(e.target.value) }></input>
            <br/>
            <button onClick={handleUserIncrement}> {userInput} </button>
            <button onClick={handleUserDecrement}> -{userInput} </button>
            <br/>

            <h2>Reset the Game</h2>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter