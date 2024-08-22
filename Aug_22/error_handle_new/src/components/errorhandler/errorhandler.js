import React, {Component} from 'react';
import './errorhandler.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as errorhandlerActions from "../../store/errorhandler/actions";
export default class errorhandler extends Component {
  constructor(props) {  
    super(props);  
    this.state = { error: false, errorInfo: null };  
  }  
    
  componentDidCatch(error, errorInfo) {  
    // Catch errors in any components below and re-render with error message  
    this.setState({  
      error: error,  
      errorInfo: errorInfo  
    })  
  }  
    
  render() {  
    if (this.state.errorInfo) {  
      return (  
        <div>  
          <h2>Something went wrong.</h2>  
          <details style={{ whiteSpace: 'pre-wrap' }}>  
            {this.state.error && this.state.error.toString()}  
            <br />  
            {this.state.errorInfo.componentStack}  
          </details>  
        </div>  
      );  
    }  
    return this.props.children;  
  }    
  }
// export default connect(
//     ({ errorhandler }) => ({ ...errorhandler }),
//     dispatch => bindActionCreators({ ...errorhandlerActions }, dispatch)
//   )( errorhandler );