import React, {Component} from 'react';
import './show.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as showActions from "../../store/show/actions";
export default class show extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName : 'Srinath',
          lastName : 'Kumar'
        };
    }
    render() {
      return <div className="component-show">
        First Name is : <b> {this.state.firstName} </b> <br/>
        Last Name is : <b>{this.state.lastName}</b>
      </div>;
    }
  }
// export default connect(
//     ({ show }) => ({ ...show }),
//     dispatch => bindActionCreators({ ...showActions }, dispatch)
//   )( show );