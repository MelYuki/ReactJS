// useSelector pour recup les infos de state redux
import { useSelector, useDispatch } from "react-redux"
// Link pour aller vers la page de details
import { Link } from "react-router-dom"

import { deleteAction, completedAction } from "../../store/actions/task-actions"
import "./list.css"

// JSX:
// map le state redux (pour recup depuis le selector)
// Affichage d'une liste (ul, li) avec les objets du state redux (tasks)
// Link doit englober le li et envoyer l'id de la task dans le routing pour le recup en params
// hover(css) rouge si priorité high et vert si normal ou low
// Si la task est completed, c'est barré en gris

// BONUS:
// afficher un bouton de suppression de la task si completed (useDispatch)

const List = () => {

    const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks)
    // console.log(tasks)

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(deleteAction(id))
    }

    const handleCompleted = (e, id) => {
        e.preventDefault()
        dispatch(completedAction(id))
    }

    return(
        <>
        {tasks.length == 0 ? <h2>...No Tasks...</h2> : <h2>Task's List</h2>}
            <ul style={ {display:"flex", flexDirection: "row", justifyContent: "space-evenly", listStyle: "none"} }>

                {tasks.map((task) => {
                    return(
                        <div key={task.id}>
                            <Link to={`/details/${task.id}`}>
                                <li className={ task.completed ? "completed" : "uncompleted" }>
                                    <h3>{task.taskName}</h3>
                                    <h3 className={ task.taskPrior == "high" ? "highPrior" : "greenPrior" }>{task.taskPrior}</h3>
                                    <button onClick={(e) => handleCompleted(e, task.id)}>
                                        Complete
                                    </button>
                                    <br/>
                                    {task.completed ?
                                        <button onClick={(e) => handleDelete(e, task.id)}>
                                            Delete
                                        </button>
                                    : null}
                                </li>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

export default List