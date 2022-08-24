import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NeedHelp from "./NeedHelp";
import Medicines from "./Medicines";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Medicines />} />
      <Route path="/login" element={<Login />} />
      <Route path="/NeedHelp" element={<NeedHelp />} />
     
    </Routes>
  );
}