import React, { Component } from "react";
import {
  Card,
  Col,
  Form,
  FormGroup,
  Modal,
  Input,
  Button,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      isModalOpen: false,
      searchTerm: "",
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    }),
      (this.handleSubmit = this.handleSubmit.bind(this));
    this.handleInputChange = this.handleInputChange.bind(this);
    this.findStaff = this.findStaff.bind(this);
    // this.delStaff = this.delStaff.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // delStaff(id) {
  //   return this.props.staffs.filter((staff) => staff.id !== id);
  // }

  handleSubmit(e) {
    e.preventDefault();
    const newStaff = {
      id: this.props.staffs.at(-1).id + 1, // Take the last element's id + 1 to get new Id
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      departmentId: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salary,
      image: "/assets/images/alberto.png",
    };
    this.toggleModal();
    this.props.addToList(newStaff);
    console.log(this.props.staffs);
  }

  handleBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleFocus = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: false },
    });
  };

  findStaff(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.staffName.value,
    });
  }

  validate(name, doB, startDate) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
    };
    if (this.state.touched.name && name.length == 0) errors.name = "Required";
    else if ((!this.state.touched.name && name.length == 1) || name.length == 2)
      errors.name = "First Name should be greater than 2 characters";
    else if (!this.state.touched.name && name.length > 30)
      errors.name = "First Name should be less than 30 characters";
    if (this.state.touched.doB && doB.length < 1) errors.doB = "Required";
    if (this.state.touched.startDate && startDate.length < 1)
      errors.startDate = "Required";
    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    console.log(this.props.staffs);
    const staffList = this.props.staffs
      .filter((staff) => {
        if (this.state.searchTerm == "") {
          return staff;
        } else if (
          staff.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ) {
          return staff;
        }
      })
      .map((staff) => {
        return (
          <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
            <Link to={`/staffs/${staff.id}`}>
              <Card>
                <div>
                  <img width="100%" src={staff.image} alt={staff.name}></img>
                  <h5 className="text-center">{staff.name}</h5>
                </div>
              </Card>
            </Link>
            <Button
              className="btn btn-danger"
              onClick={() => this.props.deleteStaff(staff.id)}
            >
              Delete
            </Button>
          </div>
        );
      });
    return (
      <div className="container">
        <h3>Nhân Viên</h3>
        <Form onSubmit={this.findStaff}>
          <Input
            style={{ width: "300px" }}
            className="form-control"
            placeholder="Find staff..."
            type="text"
            name="staffName"
          />
          <Button type="submit" color="primary">
            Find
          </Button>
        </Form>
        <Button onClick={() => this.toggleModal()} color="info">
          Add Staff
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={() => this.toggleModal()}
        >
          <ModalHeader toggle={() => this.toggleModal()}>
            Thêm Nhân Viên
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="name" md={5}>
                  Tên
                </Label>
                <Col md={7}>
                  <Input
                    type="text"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus("name")}
                    onBlur={this.handleBlur("name")}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={5}>
                  Ngày sinh
                </Label>
                <Col md={7}>
                  <Input
                    type="date"
                    name="doB"
                    className="form-control"
                    value={this.state.doB}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus("doB")}
                    onBlur={this.handleBlur("doB")}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={5}>
                  Ngày vào công ty
                </Label>
                <Col md={7}>
                  <Input
                    type="date"
                    name="startDate"
                    className="form-control"
                    value={this.state.startDate}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus("startDate")}
                    onBlur={this.handleBlur("startDate")}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={5}>
                  Phòng ban
                </Label>
                <Col md={7}>
                  <Input
                    type="select"
                    name="department"
                    className="form-control"
                    value={this.state.department}
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
                <Label htmlFor="salaryScale" md={5}>
                  Hệ số lương
                </Label>
                <Col md={7}>
                  <Input
                    type="number"
                    name="salary"
                    className="form-control"
                    value={this.state.salary}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.salary}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={5}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={7}>
                  <Input
                    type="number"
                    name="annualLeave"
                    className="form-control"
                    value={this.state.annualLeave}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={5}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={7}>
                  <Input
                    type="number"
                    name="overTime"
                    className="form-control"
                    value={this.state.overTime}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.overTime}</FormFeedback>
                </Col>
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                disabled={
                  this.state.name == "" ||
                  this.state.doB == "" ||
                  this.state.startDate == ""
                    ? true
                    : false
                }
              >
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <hr />
        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
