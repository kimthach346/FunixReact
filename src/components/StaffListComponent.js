import React, { useState } from "react"
import { Link } from "react-router-dom"

function StaffList(props) {
    
    const [searchTerm, findStaff] = useState("")
    const staffList = props.staffs
               
        .map((staff) => {
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
            <input type="text" value={searchTerm} 
                                placeholder="Enter name..." 
                                onChange={(e) => findStaff(e.target.value)} />
            {/* <select className="custom-select my-2"
                    value={selected}
                   onChange={(e) => {

                       findDept(e.target.value)
                    }}>
                <option value="">Phòng Ban</option>
                <option value="Sale">Sale</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
            </select> */}
            <hr />
            <div className="row">
                {staffList}
            </div>
        </div>
    )
    
}



export default StaffList