import React, {Component} from 'react';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as employshowActions from "../../store/employshow/actions";
export default class employshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employs : [],
      // cid : localStorage.getItem("custId")
    };
}
componentDidMount() {
  // alert(localStorage.getItem("custId"));
  axios.get("http://localhost:1234/showEmploy")
  .then(response => {
    this.setState({
      employs : response.data 
    })
    console.log(response.data)
  })
}

render() {

  const {employs} = this.state
   return <div className="component-post-service">
    
    <table border="3" align='center'>
      <tr>
        <th>Employ No</th>
        <th>Employ Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Designation</th>
        <th>Basic</th>
      </tr>
      {
        employs.map( employ => 
          <tr>
            <td>{employ.empno}</td>
            <td>{employ.name}</td>
            <td>{employ.gender}</td>
            <td>{employ.dept}</td>
            <td>{employ.desig}</td>
            <td>{employ.basic}</td>
          </tr>
      )
      }
    </table>
    </div>;
}
  }
// export default connect(
//     ({ employshow }) => ({ ...employshow }),
//     dispatch => bindActionCreators({ ...employshowActions }, dispatch)
//   )( employshow );