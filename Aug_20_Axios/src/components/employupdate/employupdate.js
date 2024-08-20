import React, {Component} from 'react';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as employupdateActions from "../../store/employupdate/actions";
export default class employupdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empno:0,
      name:'',
      gender : '',
      dept : '',
      desig : '',
      basic : 0
    };
}

changeEmpno(event) {
  this.setState({
    empno : event.target.value
  })
}

changeName(event) {
  this.setState({
    name : event.target.value 
  })
}

changeGender(event) {
  this.setState({
    gender : event.target.value
  })
}

changeDept(event) {
  this.setState({
    dept : event.target.value 
  })
}

changeDesig(event) {
  this.setState({
    desig : event.target.value
  })
}

changeBasic(event) {
  this.setState({
    basic : event.target.value 
  })
}


addEmploy = () => {
  let eno = this.state.empno
  let nam = this.state.name
  let gen = this.state.gender
  let dep = this.state.dept 
  let dsg = this.state.desig 
  let bas = this.state.basic 
  axios.post('http://localhost:1234/updateEmploy', {
    empno : eno,
    name : nam,
    gender : gen,
    dept : dep, 
    desig :dsg, 
    basic : bas
  })
  .then(function (response) {
    alert(response.data)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

    render() {
      return <div className="component-login">
       <table border="3" align='center'>
          <tr>
            <th colSpan="2">
              Employ Page
            </th>
          </tr>
          <tr>
            <th>Employ No</th>
            <td>
              <input type="number" name='empno' 
                onChange={this.changeEmpno.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th>Employ Name</th>
            <td>
              <input type="text" name='name' 
                onChange={this.changeName.bind(this)} />
            </td>
          </tr>
          <tr>
            <th>Employ Gender</th>
            <td>
              <input type="text" name='gender' 
                onChange={this.changeGender.bind(this)} />
            </td>
          </tr>
          <tr>
            <th>Employ Department</th>
            <td>
              <input type="text" name='dept' 
                onChange={this.changeDept.bind(this)} />
            </td>
          </tr>
          <tr>
            <th>Employ Designation</th>
            <td>
              <input type="text" name='desig' 
                onChange={this.changeDesig.bind(this)} />
            </td>
          </tr>
          <tr>
            <th>Employ Basic</th>
            <td>
              <input type="number" name='basic' 
                onChange={this.changeBasic.bind(this)} />
            </td>
          </tr>
          
          <tr>
            <th colSpan="2">
              <input type="button" value="Update" onClick={this.addEmploy} />
            </th>
          </tr>
        </table>
      </div>;
    }

  }
// export default connect(
//     ({ employupdate }) => ({ ...employupdate }),
//     dispatch => bindActionCreators({ ...employupdateActions }, dispatch)
//   )( employupdate );