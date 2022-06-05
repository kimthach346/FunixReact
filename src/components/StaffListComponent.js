import React from "react"
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
            
            <hr />
            <div className="row">
                {staffList}
            </div>
        </div>
    )

}

export default StaffList