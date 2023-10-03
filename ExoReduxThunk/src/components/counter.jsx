import { useSelector,useDispatch } from "react-redux"
import { incrementAction, decrementAction, resetAction } from "../store/actions/increment-actions"
import { requestAge } from "../store/thunks/requestAge-thunk"

const Counter = () => {

    const count = useSelector(state => state.counter.count)
    const age = useSelector(state => state.age.age)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementAction(1))
    }

    const handleDecrement = () => {
        dispatch(decrementAction(1))
    }

    const handleReset = () => {
        dispatch(resetAction())
    }

    const handleRequest = (e) => {
        dispatch(requestAge(e.target.value))
    }

    return(
        <>
            <h1>The age : {age}</h1>
            <input type="text" placeholder="Enter your name" onBlur={handleRequest}></input>

            <h1>COUNTER : {count}</h1>

            <h2>First Counter by 1</h2>
            <button onClick={handleIncrement}> +1 </button>
            <button onClick={handleDecrement}> -1 </button>
            <br/>

            <h2>Reset the Game</h2>
            <button onClick={handleReset}>Reset</button>
            <br/>
        </>
    )
}

export default Counter