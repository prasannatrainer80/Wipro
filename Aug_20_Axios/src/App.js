import logo from './logo.svg';

import EmployShow from './components/employshow/employshow';
import EmploySearch from './components/employsearch/employsearch';
import EmployInsert from './components/employinsert/employinsert';
import EmployUpdate from './components/employupdate/employupdate';

function App() {
  return (
    <div className="App">
      <EmployShow /> <br/><br/>
      <EmploySearch /> <br/><br/>
      <EmployInsert /> <br/><br/>
      <EmployUpdate />
      
    </div>
  );
}

export default App;
