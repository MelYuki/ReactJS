// useState pour gérer les inputs
import { useState } from "react"
// import useDispatch
import { useDispatch } from "react-redux"
// Import l'action d'ajout de task
import { addAction } from "../../store/actions/task-actions"
// Import nanoid pour id les tasks
import { nanoid } from "nanoid"

// JSX:
// Un form avec submit
// Un input pour le nom de la task
// un textarea pour la description
// Un select avec les 3 options (+ une default)
const Form = () => {

    const dispatch = useDispatch()

    const [ taskValues, setTaskValues ] = useState({
        // Set l'id dans le dispatch sinon il ne se refresh pas correctement 
        id: null,
        taskName: "",
        taskDesc: "",
        taskPrior: "",
        completed: false
    })

    // Créa fonction qui se déclenche au submit du form et dispatch au reducer redux
    const handleSubmit = (e) => {
        e.preventDefault()
        // Param l'id dans l'action OU dans le reducer
        dispatch(addAction(taskValues))
            // console.log(taskValues)
    }
    const handleInput = (e) => {
        // Récupérer le nom et la value de l'input pour injecter la value sur la bonne key
        const { name, value } = e.target
        setTaskValues({
            ...taskValues,
            [name]: value,
            id: nanoid()
        })
    }

    return (
        <>
            <h1>TODO LIST</h1>

            <h2>Add Field</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="taskName" placeholder="New Task" onChange={handleInput}/>
                </div>
                <div>
                    <input type="textarea" name="taskDesc" placeholder="Task's Description" onChange={handleInput}/>
                </div>
                <div>
                    <label>Task Priority: </label>
                    <select name="taskPrior" onChange={handleInput} value={taskValues.taskPrior}>
                        <option value="" disabled>Priority Selection</option>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <p>
                    <button type="submit" value="Add">Add Task</button>
                </p>
            </form>
        </>
    )
}

export default Form