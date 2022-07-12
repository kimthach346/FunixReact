import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { fetchDepartmentId } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    staffs: state.DepartmentId,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchDepartmentId: (id) => dispatch(fetchDepartmentId(id)),
});

class DepartmentDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDepartmentId(this.props.match);
  }

  render() {
    return (
      <div className="container my-4">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/departments">Phòng Ban</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{this.props.dept.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          {this.props.staffs.staffs.map((staff) => (
            <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
              <Link to={`/staffs/${staff.id}`}>
                <Card>
                  <div>
                    <img width="100%" src={staff.image} alt={staff.name}></img>
                    <h5 className="text-center">{staff.name}</h5>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DepartmentDetail)
);
