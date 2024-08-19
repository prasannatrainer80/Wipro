import React, {Component} from 'react';
import './studentform.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as studentformActions from "../../store/studentform/actions";
export default class studentform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName :'',
          lastName : '',
          fullName : ''
        };
    }
    show = () => {
      this.setState({
        fullName : this.state.firstName + " " +this.state.lastName
      })
    }
    changeLastName = (event) => {
      this.setState({
        lastName : event.target.value
      })
    }
    changeFirstName = (event) => {
      this.setState({
        firstName : event.target.value 
      })
    }
    render() {
      return <div className="component-studentform">
         <table border="3" align='center'>
        <tr>
          <th colSpan="2">Student Form</th>
        </tr>
        <tr>
          <th>First Name</th>
          <td>
            <input type="text" id="firstName" 
             value={this.state.firstName} onChange={this.changeFirstName}  />
          </td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>
            <input type="text" id="lastName" value={this.state.lastName}
              onChange={this.changeLastName}
            />
          </td>
        </tr>
        <tr>
          <th>Full Name</th>
          <td>
            <input type="text" id="fullName" value={this.state.fullName}/>
          </td>
        </tr>
        <tr>
          <th colSpan="2">
            <input type="button" value="Show" onClick={this.show} />
          </th>
        </tr>
        </table>
        </div>;
    }
  }
// export default connect(
//     ({ studentform }) => ({ ...studentform }),
//     dispatch => bindActionCreators({ ...studentformActions }, dispatch)
//   )( studentform );