import React from "react"
import { Row, Col, Input, Button } from "reactstrap"
import { LocalForm } from "react-redux-form"
import { Link } from "react-router-dom"

function StaffList(props) {

    const staffList = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
                <Link to={`/staffList/${staff.id}`}>
                    <div>
                        <img width="100%" src={staff.image} alt ={staff.name}></img>
                        <h5 className="text-center">{staff.name}</h5>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="container">
            <h3>Nhân Viên</h3>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Col md={10}>
                        <Input model=".staff" 
                            placeholder="Search staff..."
                            className='form-control'                            
                        />
                    </Col>
                    <Col md={2}>
                        <Button type="submit" color="primary">Find</Button>
                    </Col>
                </Row>
            </LocalForm>
            <hr />
            <div className="row">
                {staffList}
            </div>
        </div>
    )

}

export default StaffList