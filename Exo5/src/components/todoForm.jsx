import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const TodoForm = (props) => {

    // Récupération du prop setState
    const { addTask } = props;

    // Initialisation du state taskValues
    const [ taskValues, setTaskValues] = useState({
        id: nanoid(),
        taskName: '',
        taskDesc: '',
        taskPriority: '',
        complete: false
    });

    // Création de la fonction handleInputChange qui va ajouter dans le state taskValues les nouveaux éléments en temps réel
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskValues({
            ...taskValues,
            [name]: value 
        });
    }

    // Création de la fonction handleTransmitTask qui envoie le state SI complet au parent via le setState reçu en props
    const handleTransmitTask = (e) => {
        // Bloque la propagation de l'événement sans quoi le form se reseterai avant que le travail de la fonction ne soit effectué
        e.preventDefault();
        if(taskValues.taskName === '' || taskValues.taskDesc === '' || taskValues.taskPriority === '') {
            // Signaler à l'utilisateur les erreurs dans les inputs
            return;
        }
        addTask((prevValues) => ([...prevValues, taskValues]));

        // Reset des champs du state taskValues
        setTaskValues({
            id: nanoid(),
            taskName: '',
            taskDesc: '',
            taskPriority: '',
            complete: false
        });
    };

    return (
        <form>
            <label htmlFor='taskName'>Task name</label>
            <input type='text' id='taskName' name='taskName' onChange={handleInputChange}/>
            <label htmlFor='taskDesc'>Task description</label>
            <input type='text' id='taskDesc' name='taskDesc' onChange={handleInputChange}/>
            <label htmlFor='taskPriority'>Task priority</label>
            <select id='taskPriority' name='taskPriority' onChange={handleInputChange}>
                <option value='low'>Low</option>
                <option value='normal'>Normal</option>
                <option value='urgent'>Urgent</option>
            </select>
            <button onClick={handleTransmitTask}>Add task</button>
        </form>
    )
};

TodoForm.propTypes = {
    addTask: PropTypes.func
};

export default TodoForm;




