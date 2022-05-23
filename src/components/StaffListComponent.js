import React, { Component } from "react"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import dateFormat from 'dateformat'

class StaffList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStaff: null,
            colNum: "col-6 col-md-4 col-lg-2 mt-2",
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff })
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardImg src={staff.image} alt ={staff.name} />
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>
                            Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}<br/>
                            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}<br/>   
                            Phòng ban: {staff.department.name}<br/> 
                            Số ngày nghỉ còn lại: {staff.annualLeave}<br/>
                            Số ngày đã làm thêm: {staff.overTime}
                        </CardText> 
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    // setCol(cols) {
    //     this.setState({ colNum: cols })
    // }

    render() {
        const staffList = this.props.staffs.map((staff) => {
            return (
                    <div key={staff.id} className={this.state.colNum}>
                        <Card onClick={() => this.onStaffSelect(staff)}>
                            <CardImg src={staff.image} alt ={staff.name} />
                            <CardText className="text-center">{staff.name}</CardText>
                        </Card>
                    </div>
                )
            })

        return (
            <div className="container">
                {/* <div>
                    <button onClick={() => this.setCol("col-12 mt-2")} 
                    className="btn btn-primary my-2 mr-4">
                        1 Cột
                    </button>
                    <button onClick={() => this.setCol("col-6 mt-2")}
                    className="btn btn-primary my-2 mr-4">
                        2 Cột
                    </button>
                    <button onClick={() => this.setCol("col-4 mt-2")}
                    className="btn btn-primary my-2 mr-4">
                        3 Cột
                    </button>
                    <button onClick={() => this.setCol("col-3 mt-2")}
                    className="btn btn-primary my-2 mr-4">
                        4 Cột
                    </button>
                    <button onClick={() => this.setCol("col-2 mt-2")}
                    className="btn btn-primary my-2 mr-4">
                        6 Cột
                    </button>
                </div> */}
                <div className="row">
                    {staffList}
                </div>
                {/* <p>Bấm vào tên nhân viên để xem thông tin</p>
                <div className="row mt-2">
                    {this.renderStaff(this.state.selectedStaff)}
                </div> */}
            </div>
        )
}
}
export default StaffList