import React, {Component} from 'react';
import './propex1.scss'
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as propex1Actions from "../../store/propex1/actions";
export default class propex1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-propex1">
        <Menu /> <br/>
          Company is : <b> {this.props.company}</b> &nbsp;&nbsp;&nbsp;&nbsp;
          Batch is : <b> {this.props.batch} </b>
      </div>;
    }
  }
// export default connect(
//     ({ propex1 }) => ({ ...propex1 }),
//     dispatch => bindActionCreators({ ...propex1Actions }, dispatch)
//   )( propex1 );