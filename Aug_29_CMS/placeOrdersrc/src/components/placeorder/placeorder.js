import React, {Component} from 'react';
import Menu from '../menu/menu';
import axios from 'axios';
import { Alert } from 'bootstrap-4-react';
// import './placeorder.css'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as placeorderActions from "../../store/placeorder/actions";
export default class placeorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          custId : localStorage.getItem("custId"),
          venId : 0,
          menuId : 0,
          walSource : '',
          ordQuantity : 0,
          ordComments : ''
        };
    }

    placeOrder = () => {
      let cid = this.state.custId
      let vid = this.state.venId
      let mid = this.state.menuId
      let ws = this.state.walSource 
      let ordQty = this.state.ordQuantity 
      let ordCom = this.state.ordComments 
      axios.post('http://localhost:1111/placeOrder', {
        cusId:cid,
        venId:vid,
        menId:mid,
        walSource :ws,
        ordQuantity :ordQty,
        ordComments : ordCom
      })
      .then(function (response) {
        alert(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    changeVenId(event) {
      this.setState({
        venId : event.target.value 
      })
    }
    changeMenuId(event) {
      this.setState({
        menuId : event.target.value 
      })
    }

    changeOrderQuantity(event) {
      this.setState({
        ordQuantity : event.target.value 
      })
    }

    changeOrderComments(event) {
      this.setState({
        ordComments : event.target.value 
      })
    }
    changeWalletSource(event) {
      this.setState({
        walSource : event.target.value 
      })
    }

    render() {
      return <div className="component-placeorder">
        <Menu />
        <table border="3" align='center'>
          <tr>
            <th colSpan="2">
              Place Order
            </th>
          </tr>
          <tr>
            <th>Customer Id</th>
            <td>
              <input type="number" name='custId' value={this.state.custId} readOnly /> 
            </td> 
          </tr>
          <tr>
            <th>Vendor Id</th>
            <td>
              <input type="number" name='venId' onChange={this.changeVenId.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th>Menu Id</th>
            <td>
              <input type="number" name='menuId' onChange={this.changeMenuId.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th>Wallet Source</th>
            <td>
              <input type="text" name='walSource' onChange={this.changeWalletSource.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th>Order Quantity</th>
            <td>
              <input type="number" name='ordQuantity' onChange={this.changeOrderQuantity.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th>Order Comments</th>
            <td>
              <input type="text" name='ordComments' onChange={this.changeOrderComments.bind(this)} /> 
            </td> 
          </tr>
          <tr>
            <th colSpan="2">
              <input type="button" value="Place Order" onClick={this.placeOrder} />
            </th>
          </tr>
        </table>

        </div>;
    }
  }
// export default connect(
//     ({ placeorder }) => ({ ...placeorder }),
//     dispatch => bindActionCreators({ ...placeorderActions }, dispatch)
//   )( placeorder );