import React, { Component } from 'react';
import StaffList from './components/StaffListComponent'
import Department from "./components/Department"
import Salary from "./components/Salary"
import './App.css';
import { STAFFS } from "./shared/staffs"
import StaffDetail from "./components/StaffDetail"
import { DEPARTMENTS } from "./shared/departments"
import { ROLE } from "./shared/role"
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom"
import { Switch, Route, Redirect } from "react-router-dom"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      // role: ROLE,
    }
  }
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <StaffList staffs={this.state.staffs} /> */}
          <Switch>
                <Route exact path="/staffList" component={() => <StaffList staffs={this.state.staffs} />} />
                <Route path="/staffList/:staffId" component={StaffWithId} />
                <Route path="/department" component={Department} />
                {/* <Route path="/salary" component={Salary} /> */}
                <Redirect to="/staffList" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;



