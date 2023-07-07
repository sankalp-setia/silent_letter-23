import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


import Home from "./components/Home/home";
import About from "./components/About_us/about_us";
import Location from "./components/Location/location";
import Partners from "./components/Partners/partners";
import Registration from "./components/Registration/registration";
import Counter from "./components/Counter/counter";
import Success from "./components/success/success";
import Terms from "./components/Terms/terms";
import Refund from "./components/refund/refund";
import Privacy from "./components/Privacy/privacy";
import PaymentRedirect from "./components/PaymentRedirect/index";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUS" element={<About />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/success" element={<Success />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/payment_redirect" element={<PaymentRedirect />} />
      </Routes>
    </Router>
  );
};

export default App;
