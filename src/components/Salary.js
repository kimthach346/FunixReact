import React from "react"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

function Salary(props) {
    console.log(props)
    const salary = props.staffs.map((el) => {
        return (
            <div className="col-12 col-md-6 col-lg-4 p-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
                <h3>{el.name}</h3>    
                <p>Mã nhân viên: {el.id}</p>
                <p>Hệ sô lương: {el.salaryScale}</p>
                <p>Số ngày làm thêm: {el.overTime}</p>
                <p>Lương: {(el.salaryScale*3000000 + el.overTime*200000).toFixed(0)}</p>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {salary}
            </div>
        </div>
    )

}

export default Salary
