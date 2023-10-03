// Import du configStore, du reducer
import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./reducers/task-reducers"
// créa du store et indiqué via l'option reducer, notre reducer
const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})
// export default
export default store