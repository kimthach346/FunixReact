import * as ActionTypes from "./ActionTypes";

export const DepartmentId = (
  state = {
    isLoading: true,
    errMess: null,
    staffs: [], // Note: Filter staff with the same Department
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.RENDER_DEPARTMENT_ID:
      return {
        ...state,
        isLoading: false,
        staffs: action.payload,
      };
    case ActionTypes.DEPARTMENT_ID_LOADING:
      return {
        ...state,
      };
    case ActionTypes.DEPARTMENT_ID_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
