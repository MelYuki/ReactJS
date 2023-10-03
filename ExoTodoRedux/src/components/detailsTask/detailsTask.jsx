// Import useSelector, useDispatch, useParams, useNavigate
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
// Et les actions redux (suppression, complétion)
import { deleteAction, completedAction } from "../../store/actions/task-actions"

// Une fonction pour gérer la complétion de la task (dispatch, navigate)
// -------------------------  suppression ------------------------------
// -----------------  pour renvoyer a la liste (navigate)

// JSX:
// Afficher les infos de la task
// 3 boutons (delete, back, completed)

// BONUS:
// Afficher le titre et la desc a gauche d'un block
// Et la priorité en bas a droite avec sa couleur

const DetailsTask = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Récup de l'id de la task via les params
    const { id } = useParams()
    console.log(id)

    const tasks = useSelector(state => state.tasks)
    console.log(tasks)

    const handleCompleted = (e, id) => {
        e.preventDefault()
        dispatch(completedAction(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteAction(id))
    }

    return (
        <>
            <h1>Task's Details</h1>

            {tasks.map((task) => {
                console.log(task.id)
                if(task.id === id) {
                    return (
                        <div key={task.id} className={ task.completed ? "completed" : "uncompleted" }>
                            <p style={ {textAlign: "left"} }>
                                <h2>Name: </h2>
                                <h3>{task.taskName}</h3>
                            </p>
                            <p style={ {textAlign: "left"} }>
                                <h2>Description: </h2>
                                <h3>{task.taskDesc}</h3>
                            </p>
                            <div style={ task.taskPrior == "high" ? {color:"red"} : {color:"green"} }>
                                <p style={ {textAlign: "right"} }>
                                    <h2>Priority: </h2>
                                    <h3>{task.taskPrior}</h3>
                                </p>
                            </div>

                            <button onClick={(e) => handleCompleted(e, id)}>
                                Completed
                            </button>
                            <button onClick={() => {handleDelete(id), navigate("/")}}>
                                Delete
                            </button>
                        </div>
                    )
                }
            })}

            <p>
                <button onClick={ () => navigate(-1) }>
                    Back to Task List
                </button>
            </p>
        </>
    )
}

export default DetailsTask