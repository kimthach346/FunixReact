import React, { Component } from "react"
import { Control, LocalForm, Errors } from "react-redux-form"
import { Modal, ModalBody, ModalHeader, Button,  Row, Label, Col } from "reactstrap"

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values))
        alert("Current State is: " + JSON.stringify(values))
    }

    render() {
        return (
            <div className="container">
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" 
                                        name="rating"
                                        className='form-control'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="fullname" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".fullname" id="fullname" name="fullname"
                                        placeholder="Your Name"
                                        className='form-control'
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(20)
                                        }} />
                                    <Errors model=".fullname" className='text-danger' show="touched"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be greater than 2 characters",
                                                maxLength: "Must be 20 characters or less",
                                            }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea 
                                        model=".comment" id="comment" name="comment"
                                        className='form-control'
                                        row="6" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CommentForm