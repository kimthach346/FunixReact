import { STAFFS } from '../shared/staffs'
import * as ActionTypes from './ActionTypes'

export const Staffs = (state = {
    isLoading: true,
    errMess: null,
    staffs: [],
    }, action) => {
    switch (action.type) {
        case ActionTypes.RENDER_STAFF:
            return {
                ...state,
                isLoading: false,
                staffs: action.payload,
            }
        case ActionTypes.STAFF_LOADING:
            return {
                ...state,
                staffs: [],
            }
        case ActionTypes.STAFF_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
            }
        default:
            return state
    }
}