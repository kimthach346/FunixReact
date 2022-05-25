import React from "react"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

function Department(props) {
    console.log(props)
    const departments = props.department.map((dept) => {
        return (
            <div key={dept.id} className="col-12 col-md-6 col-lg-4 p-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
                <h3>{dept.name}</h3>    
                <p>{dept.numberOfStaff}</p>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {departments}
            </div>
        </div>
    )

}

export default Department