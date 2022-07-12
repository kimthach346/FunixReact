import React, { Component } from "react";
import dateFormat from "dateformat";
import {
  CardBody,
  CardTitle,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

class StaffDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.setOpen = this.setOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
    const newInfo = {
      id: this.props.match,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      departmentId: this.state.departmentId,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salary,
      image: "/assets/images/alberto.png",
    };
    this.props.updStaff(newInfo);
    console.log(this.props.match);
  }

  render() {
    if (this.props.staffsLoading) {
      return <Loading />;
    }
    return (
      <div className="container my-4">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffs">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
        </Breadcrumb>
        {this.state.isOpen ? (
          <div className="row" isopen={true}>
            <img
              className="col-12 col-md-4 col-lg-3"
              width="100%"
              src={this.props.staff.image}
              alt={this.props.staff.name}
            ></img>
            <CardBody className="col-12 col-md-8 col-lg-9">
              <CardTitle>Họ và tên: {this.props.staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(this.props.staff.doB, "dd/mm/yyyy")}
                <br />
                Ngày vào công ty:{" "}
                {dateFormat(this.props.staff.startDate, "dd/mm/yyyy")}
                <br />
                Phòng ban:{" "}
                {this.props.departments.map((dept) => {
                  if (dept.id === this.props.staff.departmentId) {
                    return dept.name;
                  } else {
                    return null;
                  }
                })}
                <br />
                Số ngày nghỉ còn lại: {this.props.staff.annualLeave}
                <br />
                Số ngày đã làm thêm: {this.props.staff.overTime}
              </CardText>
              <Button className="btn btn-info" onClick={this.setOpen}>
                Update
              </Button>
            </CardBody>
          </div>
        ) : null}
        {!this.state.isOpen ? (
          <div className="row" isopen={false}>
            <CardBody className="col-12 col-md-8 col-lg-9">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="name" md={3}>
                    Tên
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      name="name"
                      className="form-control"
                      value={this.name}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={3}>
                    Ngày sinh
                  </Label>
                  <Col md={7}>
                    <Input
                      type="date"
                      name="doB"
                      className="form-control"
                      value={this.doB}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={3}>
                    Ngày vào công ty
                  </Label>
                  <Col md={7}>
                    <Input
                      type="date"
                      name="startDate"
                      className="form-control"
                      value={this.startDate}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="department" md={3}>
                    Phòng ban
                  </Label>
                  <Col md={7}>
                    <Input
                      type="select"
                      name="departmentId"
                      className="form-control"
                      value={this.departmentId}
                      onChange={this.handleInputChange}
                    >
                      <option value=""></option>
                      <option value="Dept01">Sale</option>
                      <option value="Dept02">HR</option>
                      <option value="Dept03">Marketing</option>
                      <option value="Dept04">IT</option>
                      <option value="Dept05">Finance</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="salaryScale" md={3}>
                    Hệ số lương
                  </Label>
                  <Col md={7}>
                    <Input
                      type="number"
                      name="salary"
                      className="form-control"
                      value={this.salary}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={3}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={7}>
                    <Input
                      type="number"
                      name="annualLeave"
                      className="form-control"
                      value={this.annualLeave}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={3}>
                    Số ngày đã làm thêm
                  </Label>
                  <Col md={7}>
                    <Input
                      type="number"
                      name="overTime"
                      className="form-control"
                      value={this.overTime}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </div>
        ) : null}
      </div>
    );
  }
}

export default StaffDetail;
