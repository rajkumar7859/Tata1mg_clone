import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();
  return (
    <>
    <div className="App">
      <AllRoutes />
    </div>
   
    </>
  );
}

export default App;
