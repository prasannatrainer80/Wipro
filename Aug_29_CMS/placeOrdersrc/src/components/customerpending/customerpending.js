import React, {Component} from 'react';
import axios from 'axios';
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerpendingActions from "../../store/customerpending/actions";
export default class customerpending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus : [],
      cid : localStorage.getItem("custId")
    };
}
componentDidMount() {
  // alert(localStorage.getItem("custId"));
  axios.get("http://localhost:1111/customerPendingOrders/" +localStorage.getItem("custId"))
  .then(response => {
    this.setState({
      menus : response.data 
    })
    console.log(response.data)
  })
}

render() {

  const {menus} = this.state
   return <div className="component-post-service">
   
      <Menu /> <br/>
      
    <table border="3" align='center'>
      <tr>
        <th>Order Id</th>
        <th>Customer Id</th>
        <th>Vendor Id</th>
        <th>Menu Id</th>
        <th>Wallet Source</th>
        <th>Order Quantity</th>
        <th>Bill Amount</th>
        <th>Status</th>
        <th>Comments</th>
      </tr>
      {
        menus.map( user => 
          <tr>
            <td>{user.ordId}</td>
            <td>{user.cusId}</td>
            <td>{user.venId}</td>
            <td>{user.menId}</td>
            <td>{user.walSource}</td>
            <td>{user.ordQuantity}</td>
            <td>{user.ordBillamount}</td>
            <td>{user.ordStatus}</td>
            <td>{user.ordComments}</td>
          </tr>
      )
      }
    </table>
    </div>;
}
  }
// export default connect(
//     ({ customerpending }) => ({ ...customerpending }),
//     dispatch => bindActionCreators({ ...customerpendingActions }, dispatch)
//   )( customerpending );