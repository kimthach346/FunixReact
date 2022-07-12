import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Department from "./Department";
import Salary from "./Salary";
import StaffDetail from "./StaffDetail";
import DepartmentDetail from "./DepartmentDetail";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {
  fetchStaffs,
  fetchDepartments,
  fetchSalary,
  deleteStaff,
  addStaff,
  updateStaff,
  fetchStaffId,
} from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => dispatch(fetchStaffs()),
  fetchDepartments: () => dispatch(fetchDepartments()),
  fetchSalary: () => dispatch(fetchSalary()),
  deleteStaff: (id) => dispatch(deleteStaff(id)),
  addStaff: (staff) => dispatch(addStaff(staff)),
  updateStaff: (staff) => dispatch(updateStaff(staff)),
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          match={match.params.staffId}
          updStaff={this.props.updateStaff}
          departments={this.props.departments.departments}
          staffsLoading={this.props.staffs.isLoading}
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };
    const departmentWithId = ({ match }) => {
      return (
        <DepartmentDetail
          match={match.params.deptId}
          dept={
            this.props.departments.departments.filter(
              (val) => val.id === match.params.deptId
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staffs"
            component={() => (
              <StaffList
                staffsLoading={this.props.staffs.isLoading}
                staffs={this.props.staffs.staffs}
                deleteStaff={this.props.deleteStaff}
                addToList={this.props.addStaff}
              />
            )}
          />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route path="/departments/:deptId" component={departmentWithId} />
          <Route
            exact
            path="/departments"
            component={() => (
              <Department
                departmentsLoading={this.props.departments.isLoading}
                staffs={this.props.staffs.staffs}
                departments={this.props.departments.departments}
              />
            )}
          />
          <Route
            path="/salary"
            component={() => (
              <Salary
                salaryLoading={this.props.staffs.isLoading}
                salaries={this.props.staffs.staffs}
              />
            )}
          />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
