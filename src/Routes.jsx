import InstantLoan from "pages/InstantLoan";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmiCalculator from "pages/EmiCalculator";
import Dashboard from "components/Dashboard";
import Footer from "components/Footer";
const FrameThirtySix = React.lazy(() => import("pages/FrameThirtySix"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const HomeLoan = React.lazy(() => import("./pages/HomeLoan"))
const Personalloan = React.lazy(() => import("pages/Personalloan"))
const Login = React.lazy(() => import("components/Login"))
const Signup = React.lazy(() => import("components/Signup"))
const LoginSignupPopup = React.lazy(() => import("components/LoginSignupPopup"))
const Admin = React.lazy(() => import("pages/Admin"))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/framethirtysix" element={<FrameThirtySix />} />
          <Route path="/instantLoan" element={<InstantLoan />} />
          <Route path="/emicalculator" element={<EmiCalculator />} />
          <Route path="/personalloan" element={<Personalloan />} />
          <Route path="/homelaon" element={<HomeLoan />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginsignuppopup" element={<LoginSignupPopup />} />
          <Route path="signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/footer" element={<Footer/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
