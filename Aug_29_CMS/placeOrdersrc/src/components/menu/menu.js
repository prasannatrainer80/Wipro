import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './menu.css'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuActions from "../../store/menu/actions";
export default class menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cid : localStorage.getItem("custId"),
          cname : localStorage.getItem("cuser")
        };
    }
    render() {
      const {cid,cname} = this.state
      return <div className="component-menu">
        <p>Welcome to {cname}</p>
          <Link to="/customerShow">Customer Show</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/menuShow">Menu Show</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/walletShow">Wallet Show</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/customerOrders">Customer Pending Orders</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/customerPending">Customer Orders</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/placeOrder">Place Order</Link>
      </div>;
    }
  }
// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );