import React, {Component} from 'react';
import './menu.scss'
import {Link} from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuActions from "../../store/menu/actions";
export default class menu extends Component {
    // constructor(props) {
    //     super(props);
    //     thiscalc.state = {};
    // }
    render() {
      return <div className="component-menu">
         <Link to="/first">First</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/second">Second</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/calcform">Calc</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/buttonexample">Button Example</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/nameform">NameForm Example</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/show">Show Example</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/propex1">Property Example 1</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/studentform">Student Example 2</Link>

      </div>;
    }
  }
// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );