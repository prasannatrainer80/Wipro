import React, {Component} from 'react';
import axios from 'axios';
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menushowActions from "../../store/menushow/actions";
export default class menushow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus : [],
      cid : localStorage.getItem("custId"),
      cname : localStorage.getItem("cuser")
    };
}
componentDidMount() {
  axios.get("http://localhost:1111/showMenu")
  .then(response => {
    this.setState({
      menus : response.data 
    })
    console.log(response.data)
  })
}

render() {

  const {menus} = this.state
  const {cid} = this.state
  return <div className="component-post-service">
   
      <Menu /> <br/>
      
    <table border="3" align='center'>
      <tr>
        <th>Id</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Calories</th>
        <th>Speciality</th>
      </tr>
      {
        menus.map( user => 
          <tr>
            <td>{user.menId}</td>
            <td>{user.menItem}</td>
            <td>{user.menPrice}</td>
            <td>{user.menCalories}</td>
            <td>{user.menSpeciality}</td>
          </tr>
      )
      }
    </table>
    </div>;
}
  }
// export default connect(
//     ({ menushow }) => ({ ...menushow }),
//     dispatch => bindActionCreators({ ...menushowActions }, dispatch)
//   )( menushow );