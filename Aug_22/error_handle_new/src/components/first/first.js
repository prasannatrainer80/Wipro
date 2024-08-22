import React, {Component} from 'react';
import './first.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as firstActions from "../../store/first/actions";
export default class first extends Component {
    constructor(props) {
        super(props);
        this.state = {counter:1
        // this.add
        };
    }
    add = () => {
      this.setState(({counter}) => ({  
        counter: counter + 1  
      })); 
    }
    render() {
      if (this.state.counter==4) {
        throw new Error("Done...No More Clicks Please");
      }
      return <div className="component-first">
        counter is : {this.state.counter} <br/>
        <button onClick={this.add}>Add</button>
      </div>;
    }
  }
// export default connect(
//     ({ first }) => ({ ...first }),
//     dispatch => bindActionCreators({ ...firstActions }, dispatch)
//   )( first );