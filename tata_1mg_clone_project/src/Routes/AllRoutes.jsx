import { Routes, Route } from "react-router-dom";
import NeedHelp from "./NeedHelp";
import Medicines from "./Medicines";
import Login from "./Login&Signup/Login";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Medicines />} />
      <Route path="/login" element={<Login />} />
      <Route path="/NeedHelp" element={<NeedHelp />} />
     
    </Routes>
  );
}