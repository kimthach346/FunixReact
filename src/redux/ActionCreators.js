import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// Fetch Staffs from the server
export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(renderStaff(staffs)))
    .catch((error) => dispatch(staffsFailed(error.message)));
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFF_LOADING,
});

export const staffsFailed = (errMess) => ({
  type: ActionTypes.STAFF_FAILED,
  payload: errMess,
});

export const renderStaff = (staffs) => ({
  type: ActionTypes.RENDER_STAFF,
  payload: staffs,
});

// Fetch Department
export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((departments) => dispatch(renderDepartment(departments)))
    .catch((error) => dispatch(departmentsFailed(error.message)));
};

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENT_LOADING,
});

export const departmentsFailed = (errMess) => ({
  type: ActionTypes.DEPARTMENT_FAILED,
  payload: errMess,
});

export const renderDepartment = (departments) => ({
  type: ActionTypes.RENDER_DEPARTMENT,
  payload: departments,
});

// Fetch Salary
export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((salary) => dispatch(renderSalary(salary)))
    .catch((error) => dispatch(salaryFailed(error.message)));
};

export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});

export const salaryFailed = (errMess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errMess,
});

export const renderSalary = (salary) => ({
  type: ActionTypes.RENDER_SALARY,
  payload: salary,
});

// Handle filter staff in each Department
export const fetchDepartmentId = (id) => (dispatch) => {
  dispatch(departmentIdLoading());

  return fetch(baseUrl + `departments/${id.params.deptId}`)
    .then((response) => response.json())
    .then((staff) => {
      return dispatch(renderDepartmentId(staff));
    })
    .catch((error) => dispatch(departmentIdFailed(error.message)));
};

export const departmentIdLoading = () => ({
  type: ActionTypes.DEPARTMENT_ID_LOADING,
});

export const departmentIdFailed = (errMess) => ({
  type: ActionTypes.DEPARTMENT_ID_FAILED,
  payload: errMess,
});

export const renderDepartmentId = (departments) => ({
  type: ActionTypes.RENDER_DEPARTMENT_ID,
  payload: departments,
});

// Handle Delete Staff
export const deleteStaff = (id) => (dispatch) => {
  return (
    fetch(baseUrl + `staffs/${id}`, {
      method: "DELETE",
      // body: JSON.stringify(id),              // Don't need to use the body
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // credentials: "same-origin",
    })
      // .then((response) => response.json())    // Don't need to convert to Object
      .then(() => {
        dispatch(delStaff(id));
      })
      .catch((error) => {
        console.log("Delete staff", error.message);
        alert("Your staff could not be deleted\nError: " + error.message);
      })
  );
};

export const delStaff = (id) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: id,
});

// Update staff info
export const updateStaff = (staff) => (dispatch) => {
  return fetch(baseUrl + `staffs`, {
    method: "PATCH",
    body: JSON.stringify(staff),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(updStaff(response)))
    .catch((error) => {
      console.log("Update staff", error.message);
      alert("Your staff could not be updated\nError: " + error.message);
    });
};

export const updStaff = (staff) => ({
  type: ActionTypes.UPDATE_STAFF,
  payload: staff,
});

// Add new staff
export const addStaff = (staff) => (dispatch) => {
  return fetch(baseUrl + `staffs`, {
    method: "POST",
    body: JSON.stringify(staff),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((staff) => dispatch(addToStaffList(staff)))
    .catch((error) => {
      console.log("Add new staffs", error.message);
      alert("Your staff could not be added\nError: " + error.message);
    });
};

export const addToStaffList = (staff) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});
