// Import de createReducer
import { createReducer } from "@reduxjs/toolkit"
// Import des differentes actions créées
import { addAction, deleteAction, completedAction } from "../actions/task-actions"

// Créa d'un state initial ([])
const initialState = []
// Créa du reducer (builder) avec un .addCase pour chaque action
const taskReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addAction, (state, action) => {
            state.push(action.payload)

            //[{
            // id: nanoid(),
            // taskName: action.payload.taskName,
            // taskDesc: action.payload.taskDesc,
            // taskPrior: action.payload.taskPrior,
            // completed: action.payload.completed
            // }]
        })
        .addCase(deleteAction, (state, action) => {
            // Filter out l'object
            return state = state.filter((state) => state.id != action.payload)
        })
        .addCase(completedAction, (state, action) => {
            // Modifier le state de l'object (la key completed)
            return state = state.map((state) => state.id == action.payload ? { ...state, completed: !state.completed } : state )
        })
})

export default taskReducer