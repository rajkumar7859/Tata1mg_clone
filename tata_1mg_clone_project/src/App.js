// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
import LastFooter from "./Components/LastFooter";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home_page/Home";
import Login from "./LoginSignup/Login";
import Ayurveda from "./Ayurveda_Navbar/Ayurveda";
import { Main_product_page } from "./ProductsPage/Main_product_page";
import Address from "./Address/Address";
import ProductsDelivery from "./Address/ProductsDelivery";
import AddAddress from "./Address/AddAddress";
import Delivery from "./Address/Delivery";
import { Cart_com } from "./Cart/Components/Cart_com";
import { Individual_Product_Page } from "./individual_product_page/Components/Individual_Product_Page";
import Payment from "./Address/Payment";
import Success from "./Success_page/Success";

// json-server --watch db.json --port 8080

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/Cart" ||
      location.pathname === "/Success" ? null : (
        <Navbar />
      )}
      <Login />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart_com />}></Route>
        <Route path="/Ayurveda" element={<Ayurveda />}></Route>
        <Route path="/Products" element={<Main_product_page />}></Route>
        <Route
          path="/Products/:type/:id"
          element={<Individual_Product_Page />}
        ></Route>
        <Route path="/AddAddress" element={<AddAddress />}></Route>
        <Route path="/Delivery" element={<Delivery />}></Route>
        <Route path="/ProductsDelivery" element={<ProductsDelivery />}></Route>
        <Route path="/Address" element={<Address />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Success" element={<Success />}></Route>
      </Routes>

      {location.pathname === "/Cart" ||
      location.pathname === "/AddAddress" ||
      location.pathname === "/Delivery" ||
      location.pathname === "/ProductsDelivery" ||
      location.pathname === "/Address" ||
      location.pathname === "/Payment" ||
      location.pathname === "/Success" ? null : (
        <>
          <LastFooter />
        </>
      )}

      {/* <AddAddress /> 
       <Delivery/>  */}
    </div>
  );
}

export default App;
