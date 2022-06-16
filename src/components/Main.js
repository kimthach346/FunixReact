import React, { useState } from 'react'
import StaffList from './StaffListComponent'
import Department from "./Department"
import Salary from "./Salary"
import { STAFFS, DEPARTMENTS } from "../shared/staffs"
import StaffDetail from "./StaffDetail"
import Footer from './Footer'
import Header from './Header'
import { Switch, Route, Redirect } from "react-router-dom"

function Main() {
    const [list, addStaff] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS,
    })
    
    const StaffWithId = ({match}) => {
        return (
        <StaffDetail staff={list.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
        )
    }
    
    // function addStaff(list) {
    //     const id = list.staffs.length + 1
    //     const newStaff = {...staff, id}
    //     staffs: [...list.staffs, newStaff]
    // }

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/staffList" component={() => <StaffList 
                        renderNewStaff={addStaff} 
                        staffs={list.staffs} />} />
                <Route path="/staffList/:staffId" component={StaffWithId} />
                <Route path="/department" component={() => <Department departments={list.departments} />} /> 
                <Route path="/salary" component={() => <Salary salaries={list.staffs} />} />
                <Redirect to="/staffList" />
            </Switch>
            <Footer />
        </div>
    )
}
export default Main






