import React, {Component} from 'react';
import './buttonexample.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as buttonexampleActions from "../../store/buttonexample/actions";
export default class buttonexample extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    sayHello = () => {
      alert("Welcome to React Programming...");
    }

    company = () => {
      alert("From Wipro Company...");
    }
    render() {
      return <div className="component-buttonexample">
          <input type="button" value="Show" onClick={this.sayHello} /> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="Company" onClick={this.company} />
        </div>;
    }
  }
// export default connect(
//     ({ buttonexample }) => ({ ...buttonexample }),
//     dispatch => bindActionCreators({ ...buttonexampleActions }, dispatch)
//   )( buttonexample );