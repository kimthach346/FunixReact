import React from "react"
import dateFormat from 'dateformat'
import { CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"
import { Loading } from './LoadingComponent'

function StaffDetail(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }

    else if (props.staff != null) {
        return (
            <div className="container my-4">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
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
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default StaffDetail