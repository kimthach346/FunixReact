import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <p>Sample cho toàn bộ lab và project trong môn học Lập Trình Web Front-End với React với đầy đủ dependency.</p>
        <p>Phiên bản React hiện tại trên máy của bạn là: {React.version}</p>
        <p>Phiên bản React đã được sử dụng để thiết kế môn học: 16.14.0.</p>
      </div>
    );
  }
}

export default App;
=======
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import { STAFFS } from "./shared/staffs"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: STAFFS
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    )
  }
}

export default App;



>>>>>>> 87349c82e66719664cdead28d2ad2acdbe6e347f
