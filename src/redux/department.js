import * as ActionTypes from './ActionTypes'

export const Departments = (state = {
    isLoading: true,
    errMess: null,
    departments: [],
    }, action) => {
    switch (action.type) {
        case ActionTypes.RENDER_DEPARTMENT:
            return {
                ...state,
                isLoading: false,
                departments: action.payload,
            }
        case ActionTypes.DEPARTMENT_LOADING:
            return {
                ...state,
            }
        case ActionTypes.DEPARTMENT_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
            }
        default:
            return state
    }
}