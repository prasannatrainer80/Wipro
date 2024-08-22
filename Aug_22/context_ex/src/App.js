import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails'
import Rushikesh from './components/Rushikesh';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <UserDetails /> <hr/>
      <Rushikesh /> <br/>
      <Button />
    </div>
  );
}

export default App;
