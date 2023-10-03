import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/increment-reducers";
import requestAgeReducer from "./reducers/requestAge-reducers";

const store = configureStore({

    reducer: {
        counter: counterReducer,
        age: requestAgeReducer
    }
})

export default store