import React, {Component} from 'react';
import Menu from '../menu/menu';
import axios from 'axios';

export default class walletShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus : [],
      cid : localStorage.getItem("custId")
    };
}
componentDidMount() {
  // alert(localStorage.getItem("custId"));
  axios.get("http://localhost:1111/showCustomerWallet/" +localStorage.getItem("custId"))
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
        <th>Customer Id</th>
        <th>Wallet Id</th>
        <th>Wallet Source</th>
        <th>Wallet Amount</th>
      </tr>
      {
        menus.map( user => 
          <tr>
            <td>{user.cusId}</td>
            <td>{user.walId}</td>
            <td>{user.walSource}</td>
            <td>{user.walAmount}</td>
          </tr>
      )
      }
    </table>
    </div>;
}
  }
// export default connect(
//     ({ walletShow }) => ({ ...walletShow }),
//     dispatch => bindActionCreators({ ...walletShowActions }, dispatch)
//   )( walletShow );