import React, {Component} from 'react';
import './nameform.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as nameformActions from "../../store/nameform/actions";
export default class nameform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sname : ''
        };
    }
    changeSname = (event) => {
      this.setState({
        sname : event.target.value
      })
    }

    show = () => {
      alert("Student Name is  " +this.state.sname);
    }

    render() {
      return <div className="component-nameform">
          <table border="3" align='center'>
        <tr>
          <th colSpan="2">Student Form</th>
        </tr>
        <tr>
          <th>Student Name</th>
          <td>
            <input type="text" id="sname"
             value={this.state.sname} onChange={this.changeSname} />
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
//     ({ nameform }) => ({ ...nameform }),
//     dispatch => bindActionCreators({ ...nameformActions }, dispatch)
//   )( nameform );