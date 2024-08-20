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
import Login from './components/login/login';
import Menu from './components/menu/menu';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/propex1" element={<PropEx1 company="Wipro" batch="React" />} />
        <Route path="/show" element={<Show />} />
        <Route path="/buttonexample" element={<ButtonExample />} />
        <Route path="/nameform" element={<NameForm />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/calcform" element={<Calculation />} />
        </Routes>
      </BrowserRouter>
     {/* <First /> <br/>
     <Second /> <br/>
     <PropEx1 company="Wipro" batch="React" /> <br/>
     <Show /> <br/>
     <ButtonExample /> <br/>
     <NameForm /> <br/>
     <StudentForm /> <br/>
     <Calculation /> <br/> <hr/>
     <Login /> */}
    </div>
  );
}

export default App;
