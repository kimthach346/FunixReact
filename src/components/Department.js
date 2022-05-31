import React from "react"
import { Card, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

function Department(props) {
    const department = props.departments.map((dept) => {
        return (
            <div key={dept.id} className="col-12 col-md-6 col-lg-4 p-2">
                <Card className="text-center">
                    <h3>{dept.name}</h3>    
                    <p>Số lượng nhân viên: {dept.numberOfStaff}</p>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                {department}
            </div>
        </div>
    )

}

export default Department