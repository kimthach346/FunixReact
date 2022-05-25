import React from "react"
import dateFormat from 'dateformat'
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

function StaffDetail(props) {
    console.log(props)
    if (props.staff != null) {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <CardImg className="col-12 col-md-4 col-lg-3" src={props.staff.image} alt ={props.staff.name} />
                    <CardBody className="col-12 col-md-8 col-lg-9">
                        <CardTitle>Họ và tên: {props.staff.name}</CardTitle>
                        <CardText>
                            Ngày sinh: {dateFormat(props.staff.doB, "dd/mm/yyyy")}<br/>
                            Ngày vào công ty: {dateFormat(props.staff.startDate, "dd/mm/yyyy")}<br/>   
                            Phòng ban: {props.staff.department.name}<br/> 
                            Số ngày nghỉ còn lại: {props.staff.annualLeave}<br/>
                            Số ngày đã làm thêm: {props.staff.overTime}
                        </CardText> 
                    </CardBody>
                </Card>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default StaffDetail