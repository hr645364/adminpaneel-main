import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../../Screen/Signup/Signup";
import Login from "../../Screen/Login/Login";
import Dashborad from "../../Screen/Dashborad/Dashborad";
import Protected from "../../Screen/Protected";
import ModuleNotFound from "../../Screen/ModuleNotFOund/ModuleNotFound";
import Admin from "../../Screen/Dashborad/DashboardScreen/Admin";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected  />} />
          <Route path="signp" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="adminproected/*" element={<Dashborad />} />
          {/* <Route path="/okayhuagya" element={<Admin />} /> */}
          <Route path="*" element={<ModuleNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
