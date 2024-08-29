import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import CustomerShow from './components/customershow/customershow';
import Login from './components/login/login';
import MenuShow from './components/menushow/menushow';
import WalletShow from './components/walletShow/walletShow';
import CustomerOrders from './components/customerorders/customerorders';
import CustomerPending from './components/customerpending/customerpending';
import PlaceOrder from './components/placeorder/placeorder';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Welcome to Router Example</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/customerShow' element={<CustomerShow />} />
          <Route path='/menuShow' element={<MenuShow />} />
          <Route path="/walletShow" element={<WalletShow />} /> 
          <Route path="/customerOrders" element={<CustomerOrders />} /> 
          <Route path="/customerPending" element={<CustomerPending />} /> 
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
