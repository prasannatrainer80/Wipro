import React, {Component} from 'react';
import './calculation.scss'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as calculationActions from "../../store/calculation/actions";
export default class calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstNo : 0,
          secondNo : 0,
          result : 0
        };
    }

    sum = () => {
      this.setState({
        result : parseInt(this.state.firstNo) +  parseInt(this.state.secondNo)
      })
    }
    changeFirstNo = (event) => {
      this.setState({
        firstNo : event.target.value
      })
    }

    changeSecondNo = (event) => {
      this.setState({
        secondNo : event.target.value
      })
    }

    changeResult = (event) => {
      this.setState({
        result : event.target.value
      })
    }
    render() {
    
      if (this.state.firstNo >= 100 || this.state.secondNo >= 100) {
        throw new Error("Number Cannot be Greater than Hundred...");
      }
      return <div className="component-calculation">
        
        <table border="3" align="center">
          <tr>
            <th>First Number</th>
              <td>
                <input type="number" id="firstNo" value={this.state.firstNo}
                  onChange={this.changeFirstNo}
                /> 
              </td>
          </tr>
          <tr>
            <th>Second Number</th>
            <td>
              <input type="number" id="secondNo" value={this.state.secondNo}
                onChange={this.changeSecondNo}
              /> 
            </td>
          </tr>
          <tr>
            <th>Result</th>
            <td>
              <input type="number" id="result" value={this.state.result}
                onChange={this.changeResult}
              />
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <input type="button" value="Sum" onClick={this.sum} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="button" value="Sub" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="button" value="Mult" />
            </th>
          </tr>
        </table>
      </div>;
    }
  }
// export default connect(
//     ({ calculation }) => ({ ...calculation }),
//     dispatch => bindActionCreators({ ...calculationActions }, dispatch)
//   )( calculation );