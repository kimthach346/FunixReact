import * as ActionTypes from './ActionTypes'

export const Salary = (state = {
    isLoading: true,
    errMess: null,
    salary: [],
    }, action) => {
    switch (action.type) {
        case ActionTypes.RENDER_SALARY:
            return {
                ...state,
                isLoading: false,
                salary: action.payload,
            }
        case ActionTypes.SALARY_LOADING:
            return {
                ...state,
            }
        case ActionTypes.SALARY_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
            }
        default:
            return state
    }
}