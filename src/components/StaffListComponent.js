import React, { useState } from "react"
import { Card, Col, Form, FormGroup, Modal, Input, Button, ModalHeader, ModalBody, Label, FormFeedback } from "reactstrap"
import { Link } from "react-router-dom"

function StaffList(props) {
    
    const [searchTerm, setInput] = useState('')
    const [isModalOpen, setModal] = useState(false)

    const staffList = props.staffs
        .filter((staff) => {
            if(searchTerm == "") {
                return staff
            } else if(staff.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(e.target.staffName.value)
    }

    const [errors, setErrors] = useState({})
    const handleForm = (e) => {
        e.preventDefault()
        setErrors(validate(newStaff))
    }

    // const handleBlur = (field) => (e) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     })
    // }

    const [newStaff, setInputValues] = useState({
        name: '',
        doB: '',
        salaryScale: '',
        startDate: '',
        department: '',
        annualLeave: '',
        overTime: '',
        salary: '',
        image: '/assets/images/alberto.png',
        touched: {
            name: false,
            dOB: false,
            startDate: false,
        },
    })

    function handleInputChange(e) {
        setInputValues({...newStaff, [e.target.name]: e.target.value})
        console.log(newStaff)
    }

    function validate(name, dOB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
        }
        if (newStaff.touched.name && name.length < 2) 
            errors.name = 'Name should be greater than 2 characters'
        else if (newStaff.touched.name && name.length > 30)
            errors.name = 'Name should be less than 30 characters'
        if (newStaff.touched.dOB && dOB.length < 1)
            errors.dOB = 'Required'
        if (newStaff.touched.startDate && startDate.length < 1)
            errors.startDate = 'Required'
        return errors
    }
    
    return (
        <div className="container">
            <h3>Nhân Viên</h3>
            
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Find staff...' type="text" name='staffName' />
                <Button type="submit" color="primary">Find</Button>
            </Form>
            
            <Button onClick={() => setModal(!isModalOpen)} color='info'>Add Staff</Button>
            <Modal isOpen={isModalOpen} toggle={() => setModal(!isModalOpen)}>
                <ModalHeader toggle={() => setModal(!isModalOpen)}>Thêm Nhân Viên</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleForm}>
                        <FormGroup row>
                            <Label htmlFor='name' md={4}>Tên</Label>
                            <Col md={8}>
                                <Input type='text' name='name' 
                                    value={newStaff.name}
                                    // valid={errors.name === ''} 
                                    // invalid={errors.name !== ''}
                                    onChange={handleInputChange}
                                    // onBlur={handleBlur}    
                                    />
                                {/* {errors.name != '' ? <FormFeedback>{errors.name}</FormFeedback> : undefined} */}
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='dOB' md={4}>Ngày sinh</Label>
                            <Col md={8}>
                                <Input type='date' name='dOB' 
                                    value={newStaff.dOB}
                                    // valid={errors.name === ''} 
                                    // invalid={errors.name !== ''}
                                    onChange={handleInputChange}
                                    // onBlur={handleBlur}    
                                        />
                                {/* {errors.dOB != '' ? <FormFeedback>{errors.dOB}</FormFeedback> : undefined} */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='startDate' md={4}>Ngày vào công ty</Label>
                            <Col md={8}>
                                <Input type='date' name='startDate' 
                                    value={newStaff.startDate}
                                    // valid={errors.name === ''} 
                                    // invalid={errors.name !== ''}
                                    onChange={handleInputChange}
                                    // onBlur={handleBlur}    
                                        />
                                {/* {errors.startDate != '' ? <FormFeedback>{errors.startDate}</FormFeedback> : undefined} */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='department' md={4}>Phòng ban</Label>
                            <Col md={8}>
                                <select>
                                    <option value='IT'>IT</option>
                                    <option value='HR'>HR</option>
                                    <option value='Marketing'>Marketing</option>
                                    <option value='Sale'>Sale</option>
                                    <option value='Finance'>Finance</option>
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='salaryScale' md={4}>Hệ số lương</Label>
                            <Col md={8}>
                                <Input type='text' name='salary' 
                                        
                                        />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='annualLeave' md={4}>Số ngày nghỉ còn lại</Label>
                            <Col md={8}>
                                <Input type='text' name='annualLeave' 
                                        
                                        />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='overTime' md={4}>Số ngày đã làm thêm</Label>
                            <Col md={8}>
                                <Input type='text' name='overTime' 
                                        
                                        />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <Button type="submit" color='primary' >Add</Button>
            </Modal>
            
            <hr />
            <div className="row">
                {staffList}
            </div>
        </div>
    )
  
}

export default StaffList