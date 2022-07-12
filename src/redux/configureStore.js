import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staffs } from "./staff";
import { Departments } from "./department";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Salary } from "./salary";
import { DepartmentId } from "./departmentId";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      salary: Salary,
      DepartmentId: DepartmentId,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
