import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import axios from 'axios';
// import './login.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      passWord:'',
      result : ''
    };
}

changeUserName(event) {
  this.setState({
    userName : event.target.value
  })
}

changePassword(event) {
  this.setState({
    passWord : event.target.value 
  })
}

login = () => {
  let user = this.state.userName
  let pwd = this.state.passWord
  let cid = "";
  let str = "http://localhost:1111/custAuthenticate/"+user+"/" +pwd 
  axios.get(str)
  .then(response => {
    if (response.data=='1') {
      // alert("Correct");
      localStorage.removeItem("custId");
      axios.get("http://localhost:1111/custGetId/" +user).then(response => {
        cid = response.data;
        localStorage.setItem("custId",cid);
      })
      localStorage.setItem("cuser",user)
      this.props.navigate("/menu")
    }
  //  alert(response.data)
   this.state.result = response.data
    this.setState({
      customers : response.data 
    })
    console.log(response.data)
  })
  // if (this.state.userName=="Hexaware" && this.state.passWord=="Hexaware") {
  //   //alert("Correct Credentails...");
  //   this.props.navigate("/menu")
  // } else {
  //   alert("Invalid Credentials...")
  // }
}

    render() {
      return <div className="component-login">
       <table border="3" align='center'>
          <tr>
            <th colSpan="2">
              Login Page
            </th>
          </tr>
          <tr>
            <th>User Name</th>
            <td>
              <input type="text" name='userName' 
                onChange={this.changeUserName.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input type="password" name='passWord' 
                onChange={this.changePassword.bind(this)} />
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <input type="button" value="Login" onClick={this.login} />
            </th>
          </tr>
        </table>
      </div>;
    }
  }

  export default withRouter(login);