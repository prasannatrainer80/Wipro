import logo from './logo.svg';
import './App.css';
// import Validation from './Validation';
import Validate from './Validate';
// import Test from './Test';
import Testing from './Testing';
import ValidationRepeat from './ValidationRepeat';

function App() {
  return (
    <div className="App">
     <Testing />
     <hr/>
     <Validate /> 
     <hr/>
     <ValidationRepeat />
     {/* <Validation /> */}
    </div>
  );
}

export default App;
