import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = {
    isLoading: true,
    errMess: null,
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.RENDER_STAFF:
      return {
        ...state,
        isLoading: false,
        staffs: action.payload,
      };
    case ActionTypes.STAFF_LOADING:
      return {
        ...state,
      };
    case ActionTypes.STAFF_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    case ActionTypes.DELETE_STAFF:
      const modifiedList = state.staffs.filter(
        (staff) => staff.id !== action.payload
      );
      return {
        ...state,
        isLoading: false,
        staffs: modifiedList,
      };
    case ActionTypes.UPDATE_STAFF:
      return {
        ...state,
        isLoading: false,
        staffs: action.payload,
      };
    case ActionTypes.ADD_STAFF:
      return {
        ...state,
        isLoading: false,
        staffs: action.payload,
      };
    default:
      return state;
  }
};
