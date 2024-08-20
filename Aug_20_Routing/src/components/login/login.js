import React, {Component} from 'react';
import './login.scss'
import { withRouter } from '../../withRouter';
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
  // alert("Login Button Clicked...")
  // alert(this.state.userName);
  // alert(this.state.passWord);
  if (this.state.userName == "Wipro" && this.state.passWord == "Wipro") {
    // alert("Correct Credentials...");
    this.props.navigate("/menu")

  } else {
    alert("Invalid Credentials...");
  }
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
          <input type="text" name='userName' onChange={this.changeUserName.bind(this)} /> 
        </td> 
      </tr> 
      <tr>
        <th>Password</th>
        <td>
          <input type="password" name='passWord' onChange={this.changePassword.bind(this)} />
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
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );