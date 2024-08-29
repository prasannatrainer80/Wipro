import React, {Component} from 'react';
import Menu from '../menu/menu';
import axios from 'axios';
// import './customershow.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customershowActions from "../../store/customershow/actions";
export default class customershow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers : []
    };
}
componentDidMount() {
  axios.get("http://localhost:1111/showCustomer")
  .then(response => {
    this.setState({
      customers : response.data 
    })
    console.log(response.data)
  })
}

render() {

  const {customers} = this.state
  return <div className="component-post-service">
      <Menu /> <br/>
    <table border="3" align='center'>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      {
        customers.map( user => 
          <tr>
            <td>{user.cusId}</td>
            <td>{user.cusName}</td>
            <td>{user.cusUsername}</td>
            <td>{user.cusEmail}</td>
            <td>{user.cusPhnNo}</td>
          </tr>
      )
      }
    </table>
    </div>;
}
  }
// export default connect(
//     ({ customershow }) => ({ ...customershow }),
//     dispatch => bindActionCreators({ ...customershowActions }, dispatch)
//   )( customershow );