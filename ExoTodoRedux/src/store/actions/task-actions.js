// Import createAction
import { createAction } from "@reduxjs/toolkit"
// créa de 3 actions: ajout, suppression, completed ("....../......")
export const addAction = createAction("task/add")
export const deleteAction = createAction("task/delete")
export const completedAction = createAction("task/completed")