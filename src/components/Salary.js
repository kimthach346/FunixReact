import React, { useState } from "react"
import { Card, Breadcrumb, BreadcrumbItem, CardFooter, Button } from "reactstrap"
import { Link } from "react-router-dom"

function Salary(props) {
    const [isSort, setSortSalary] = useState(true);
    const [MyStaff, setStaff] = useState([]);
    const salary = props.salaries
        .map((el) => {
            return (
                <div className="col-12 col-md-6 col-lg-4 p-2">
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

    const sortSalaryAcs = () => {
        let sorted = props.salaries.sort((a, b) => (a.salaryScale*3000000 + a.overTime*200000).toFixed(0) - (b.salaryScale*3000000 + b.overTime*200000).toFixed(0));
        setStaff(sorted); 
        setSortSalary(!isSort);
    }

    const sortSalaryDcs = () => {
        let sorted = props.salaries.sort((a, b) => (b.salaryScale*3000000 + b.overTime*200000).toFixed(0) - (a.salaryScale*3000000 + a.overTime*200000).toFixed(0));
        setStaff(sorted); 
        setSortSalary(!isSort);
    }
    
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
            <div className="d-flex justify-content-between">
                <Button onClick={sortSalaryAcs}>Sắp xếp theo lương tăng dần</Button>
                <Button onClick={sortSalaryDcs}>Sắp xếp theo lương giảm dần</Button>
            </div>
            <div className="row">
                {salary}
            </div>
        </div>
    )

}

export default Salary
