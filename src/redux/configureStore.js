import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Staffs } from './staff'
import { Departments } from './department'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
        }),
        applyMiddleware(thunk, logger)
    )
}