import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import PropEx1 from './components/propex1/propex1';
import Show from './components/show/show';
import ButtonExample from './components/buttonexample/buttonexample';
import NameForm from './components/nameform/nameform';
import StudentForm from './components/studentform/studentform';
import Calculation from './components/calculation/calculation';
function App() {
  return (
    <div className="App">
     <First /> <br/>
     <Second /> <br/>
     <PropEx1 company="Wipro" batch="React" /> <br/>
     <Show /> <br/>
     <ButtonExample /> <br/>
     <NameForm /> <br/>
     <StudentForm /> <br/>
     <Calculation />
    </div>
  );
}

export default App;
