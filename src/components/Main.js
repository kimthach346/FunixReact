import React, { Component } from 'react'
import StaffList from './StaffListComponent'
import Department from "./Department"
import Salary from "./Salary"
import { STAFFS, DEPARTMENTS } from "../shared/staffs"
import StaffDetail from "./StaffDetail"
import Footer from './Footer'
import Header from './Header'
import { Switch, Route, Redirect } from "react-router-dom"

// function Main() {
//     const [list, setStaffList] = useState({
//         staffs: STAFFS,
//         departments: DEPARTMENTS,
//     })
    
//     const addStaff = (staff) => {
//         const id = list.staffs.length + 1
//         const [newStaff, setNewStaff] = useState({...staff, id})
//         setNewStaff({
//             staffs: {...list.staffs, newStaff}
//         })
//         console.log(newStaff)
//         console.log(list.staffs)
//     }

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
        }
        this.addStaff = this.addStaff.bind(this)
    }

    addStaff(newStaff) {
        const id = Math.floor(Math.random() * 100)
        const setStaff = {...newStaff, id}
        let newListStaff = this.state.staffs
        newListStaff.push(setStaff)
        this.setState({
            staffs: newListStaff,
        })
    }
    render() {
        const StaffWithId = ({match}) => {
            return (
            <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
            )
        }
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/staffList" component={() => <StaffList 
                            renderNewStaff={this.addStaff} 
                            staffs={this.state.staffs} />} />
                    <Route path="/staffList/:staffId" component={StaffWithId} />
                    <Route path="/department" component={() => <Department departments={this.state.departments} />} /> 
                    <Route path="/salary" component={() => <Salary salaries={this.state.staffs} />} />
                    <Redirect to="/staffList" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main






