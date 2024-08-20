import React, {Component} from 'react';
import axios from 'axios';
export default class employsearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employ : {}
    };
}

handleSubmit = () => {
  const {employ} = this.state

 // alert("Welcome to " +this.state.value)
  axios.get("http://localhost:1234/searchEmploy/" +this.state.value)
  .then(response => {
    this.setState({
      employ : response.data 
    })
    // alert(users);
    console.log(response.data)
  })
}

handleChange = (event) => {
  this.setState({value: event.target.value});
}
  
render() {
  const {employ} = this.state
  return <div className="component-usersearch">
  <form>
    <label>
    Employ Id:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
  </label>
    <input type="button" value="Search" onClick={this.handleSubmit} />
  </form>
  Id :      {employ.empno} <br/>
Name : {employ.name} <br/>
Gender : {employ.gender}

    </div>;
}

}
// export default connect(
//     ({ employsearch }) => ({ ...employsearch }),
//     dispatch => bindActionCreators({ ...employsearchActions }, dispatch)
//   )( employsearch );