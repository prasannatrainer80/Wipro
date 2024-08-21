import React, {Component} from 'react';
import './fc2.scss'


const fc2 = () => {
  return (
    <div style={{ margin: '50px' }}>
        <h1>Welcome to Functional Components... </h1>
        <h3>From Excelr Trainer Prasanna... </h3>
    </div>
  )
}

export default fc2;
// export default connect(
//     ({ fc2 }) => ({ ...fc2 }),
//     dispatch => bindActionCreators({ ...fc2Actions }, dispatch)
//   )( fc2 );