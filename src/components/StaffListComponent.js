import React, { Component, setState } from "react"
import { Card, Col, Form, FormGroup, Modal, Input, Button, ModalHeader, ModalBody, Label, FormFeedback } from "reactstrap"
import { Link } from "react-router-dom"

// function StaffList(props) {
//     const [searchTerm, setInput] = useState('')
//     const [isModalOpen, setModal] = useState(false)

class StaffList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
            isModalOpen: false,
            searchTerm: '',
            image: '/assets/images/alberto.png',
            touched: {
                name: false,
                doB: false,
                startDate: false,
            }
        },
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.findStaff = this.findStaff.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const newStaff = {
            name: this.state.name,
            doB: this.state.doB,
            salaryScale: this.state.salaryScale,
            startDate: this.state.startDate,
            department: this.state.department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            salary: this.state.salary,
            image: '/assets/images/alberto.png',
        }
        this.props.renderNewStaff(newStaff)
    }

    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    handleFocus = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: false }
        })
    }

    findStaff(e) {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.staffName.value,
        })
    }

    validate(name, doB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
        }
        if (this.state.touched.name && name.length == 0)
            errors.name = "Required"
        else if (!this.state.touched.name && name.length >= 1 && name.length <= 2)
            errors.name = "First Name should be greater than 2 characters"
        else if (!this.state.touched.name && name.length > 30)
            errors.name = "First Name should be less than 30 characters"
        if (this.state.touched.doB && doB.length < 1)
            errors.doB = "Required"
        if (this.state.touched.startDate && startDate.length < 1)
            errors.startDate = "Required"
        return errors
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setInput(e.target.staffName.value)
    // }

    // const [errors, setErrors] = useState({
    //     name: '',
    //     doB: '',
    //     startDate: '',
    //     annualLeave: '',
    //     overTime: '',
    //     salary: '',
    // })
    
    // const [initState, setInputValues] = useState({
    //     name: '',
    //     doB: '',
    //     salaryScale: '',
    //     startDate: '',
    //     department: '',
    //     annualLeave: '',
    //     overTime: '',
    //     salary: '',
    //     image: '/assets/images/alberto.png',
    //     touched: {
    //         name: false,
    //         dOB: false,
    //         startDate: false,
    //         annualLeave: false,
    //         overTime: false,
    //         salary: false,
    //     },
    // })

    // function handleInputChange(e) {
    //     setInputValues({...initState, [e.target.name]: e.target.value})
    // }
    // const handleBlur = (field) => (e) => {
    //     validate({
    //         ...initState.touched,
    //         [field]: true,
    //     })
    // }
    // function validate(initState.name, initState.dOB, startDate, annualLeave, salary, overTime) {
    //     if (!initState.touched.name) 
    //         errors.name = 'Required'
    //     if (initState.touched.name && name.length < 2) 
    //         errors.name = 'Name should be greater than 2 characters'
    //     else if (initState.touched.name && name.length > 30)
    //         errors.name = 'Name should be less than 30 characters'
    //     if (initState.touched.dOB)
    //         errors.dOB = 'Required'
    //     if (initState.touched.startDate)
    //         errors.startDate = 'Required'
    //     if (initState.touched.salary && salary.length < 1)
    //         errors.salary = 'Required'
    //     if (initState.touched.annualLeave && annualLeave.length < 1)
    //         errors.annualLeave = 'Required'
    //     if (initState.touched.overTime && overTime.length < 1)
    //         errors.overTime = 'Required'
    //     return errors
    // }
    // const handleForm = (e) => {
    //     e.preventDefault()
    //     const newStaff = {
    //         name: '',
    //         doB: '',
    //         salaryScale: '',
    //         startDate: '',
    //         department: '',
    //         annualLeave: '',
    //         overTime: '',
    //         salary: '',
    //         image: '/assets/images/alberto.png',
    //     }
    //     // addStaff(newStaff)
    // }
    // // console.log(errors)

    render() {
        
        const errors = this.validate(
            this.state.name,
            this.state.doB,
            this.state.startDate,
        )

        const staffList = this.props.staffs
            .filter((staff) => {
                if(this.state.searchTerm == "") {
                    return staff
                } else if(staff.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                    return staff
                }
            })
            .map((staff) => {
                return (
                    <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
                        <Link to={`/staffList/${staff.id}`}>
                            <Card>
                                <div>
                                    <img width="100%" src={staff.image} alt ={staff.name}></img>
                                    <h5 className="text-center">{staff.name}</h5>
                                </div>
                            </Card>
                        </Link>
                    </div>
                )
            })
            
        return (
            <div className="container">
                <h3>Nhân Viên</h3>
                <Form onSubmit={this.findStaff}>
                    <Input className='form-control' placeholder='Find staff...' type="text" name='staffName' />
                    <Button type="submit" color="primary">Find</Button>
                </Form>
                <Button onClick={this.toggleModal} color='info'>Add Staff</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='name' md={5}>Tên</Label>
                                <Col md={7}>
                                    <Input type='text' name='name'
                                        className='form-control'
                                        value={this.state.name}
                                        valid={errors.name === ''} 
                                        invalid={errors.name !== ''}
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleFocus('name')}
                                        onBlur={this.handleBlur('name')}    
                                        />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='doB' md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Input type='date' name='doB' 
                                        className='form-control'
                                        value={this.state.doB}
                                        valid={errors.doB === ''} 
                                        invalid={errors.doB !== ''}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('doB')}
                                            />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='startDate' md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Input type='date' name='startDate' 
                                        className='form-control'
                                        value={this.state.startDate}
                                        valid={errors.startDate === ''} 
                                        invalid={errors.startDate !== ''}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('startDate')}    
                                            />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='department' md={5}>Phòng ban</Label>
                                <Col md={7}>
                                    <Input type='select' name='department'
                                        className='form-control'
                                        value={this.state.department}
                                        onChange={this.handleInputChange}
                                            >
                                        <option value='IT'>IT</option>
                                        <option value='HR'>HR</option>
                                        <option value='Marketing'>Marketing</option>
                                        <option value='Sale'>Sale</option>
                                        <option value='Finance'>Finance</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='salaryScale' md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Input type='number' name='salary' 
                                        className='form-control'
                                        value={this.state.salary}
                                        onChange={this.handleInputChange}
                                            />
                                    <FormFeedback>{errors.salary}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='annualLeave' md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Input type='number' name='annualLeave' 
                                        className='form-control'
                                        value={this.state.annualLeave}
                                        onChange={this.handleInputChange}
                                            />
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='overTime' md={5}>Số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Input type='number' name='overTime' 
                                        className='form-control'
                                        value={this.state.overTime}
                                        onChange={this.handleInputChange}
                                            />
                                    <FormFeedback>{errors.overTime}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <Button type="submit" color='primary' >Add</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                
                <hr />
                <div className="row">
                    {staffList}
                </div>
            </div>
        )}
    }

export default StaffList