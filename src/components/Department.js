import React, { Component } from "react";
import { Card, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Department extends Component {
  render() {
    const department = this.props.departments.map((dept) => {
      let staffInDept = this.props.staffs.filter(
        (staff) => staff.departmentId === dept.id
      );
      return (
        <Link
          className="col-12 col-md-6 col-lg-4 p-2"
          to={`/departments/${dept.id}`}
        >
          <Card className="text-center">
            <h3>{dept.name}</h3>
            <p>Số lượng nhân viên: {staffInDept.length}</p>
          </Card>
        </Link>
      );
    });

    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffList">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">{department}</div>
      </div>
    );
  }
}

export default Department;
