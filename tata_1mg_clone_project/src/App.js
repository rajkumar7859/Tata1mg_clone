import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/NavbarAllComponent/Navbar';
import { useLocation } from 'react-router-dom';
import Login from './Routes/Login&Signup/Login';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Login />
      <AllRoutes />
    </div>
  );
}

export default App;
