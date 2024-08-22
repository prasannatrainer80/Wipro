import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import ErrorHandler from './components/errorhandler/errorhandler';
import Calculation from './components/calculation/calculation';
function App() {
  return (
    <div className="App">
      <ErrorHandler>
        <First />
        </ErrorHandler> <br/><hr/>
      <ErrorHandler>
        <Calculation />
        </ErrorHandler>
    </div>
  );
}

export default App;
