import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './todoList.css';

const TodoList = (props) => {

    // Récupération des props du state et setState
    const { list, addTask } = props;

    // Création de la fonction handleDeleteTask qui permet de modifier un objet du tableau du state (list) et de lui injecter un nouveau tableau en ayant supprimer l'objet avec l'id équivalent à celui envoyé en params
    const handleDeleteTask = (e, id) => {
        // Bloque la propagation de l'événement sans quoi le form se reseterai avant que le travail de la fonction ne soit effectué
        e.preventDefault();
        const updatedTaskList = list.filter((task) => {
            return task.id !== id
        });
        addTask(updatedTaskList);
    };
    // Création de la fonction handleCompleteTask qui permet de modifier un objet du tableau du state (list) et de lui injecter un nouveau tableau en ayant modifier l'élement de l'ojet avec l'id équivalent à celui envoyé en params
    const handleCompleteTask = (e, id) => {
        // Bloque la propagation de l'événement sans quoi le form se reseterai avant que le travail de la fonction ne soit effectué
        e.preventDefault();
        const updatedTaskList = list.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    complete: true
                }
            }
            return task;
        });
        addTask(updatedTaskList);
    }

    return (
        <ul style={{listStyle: 'none'}}>
            {list.map((task) => {
                return(
                    <li key={nanoid()} className={task.complete ? 'complete' : 'uncomplete'}>
                        <h3>{task.taskName}</h3> {task.taskPriority === 'urgent' ? <h3 className='high'>{task.taskPriority}</h3> : null}
                        <p>{task.taskDesc}</p>
                        <button onClick={(e) => handleDeleteTask(e, task.id)}>Delete</button>
                        <button onClick={(e) => handleCompleteTask(e, task.id)}>Complete</button>
                    </li>
                )
            })}
        </ul>
    )
};

TodoList.propTypes = {
    list: PropTypes.array,
    addTask: PropTypes.func
}

export default TodoList;