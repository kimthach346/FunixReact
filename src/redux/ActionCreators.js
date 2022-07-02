import * as ActionTypes from './ActionTypes'
import { STAFFS } from '../shared/staffs'

export const fetchStaffs = () => dispatch => {
    dispatch(staffsLoading(true))
    setTimeout(() => {
        dispatch(renderStaff(STAFFS))
    }, 1500)
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFF_LOADING
})

export const staffsFailed = errMess => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errMess,
})

export const renderStaff = staffs => ({
    type: ActionTypes.RENDER_STAFF,
    payload: staffs,
})
