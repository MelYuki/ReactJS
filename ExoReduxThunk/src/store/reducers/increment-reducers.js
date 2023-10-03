import { createReducer } from "@reduxjs/toolkit";
import { incrementAction, decrementAction, resetAction } from "../actions/increment-actions";

const initialState = {
    count: 0
}

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAction, (state, action) => {
            return {
                ...state,
                count: state.count + action.payload
            }
        })
        .addCase(decrementAction, (state, action) => {
            return {
                ...state,
                count: state.count - action.payload
            }
        })
        .addCase(resetAction, (state) => {
            return {
                ...state,
                count: 0
            }
        })
})

export default counterReducer