import React from "react"
import { Card, Breadcrumb, BreadcrumbItem, CardFooter } from "reactstrap"
import { Link } from "react-router-dom"

function Salary(props) {
    const salary = props.salaries.map((el) => {
        return (
            <div key={el.id} className="col-12 col-md-6 col-lg-4 p-2">
                <Card className="p-3">
                    <h3>{el.name}</h3>    
                    <p>Mã nhân viên: {el.id}</p>
                    <p>Hệ số lương: {el.salaryScale}</p>
                    <p>Số ngày làm thêm: {el.overTime}</p>
                    <CardFooter>
                        Lương: {(el.salaryScale*3000000 + el.overTime*200000).toFixed(0)}
                    </CardFooter>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                {salary}
            </div>
        </div>
    )

}

export default Salary
