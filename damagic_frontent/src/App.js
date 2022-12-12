import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Access from "./pages/access";
import { useSelector } from "react-redux";
import "./app.css";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import About from "./pages/About";
import isAuthenticated from "./utils/isAuthenticated";
import { useEffect } from "react";
import { setConfig } from "react-hot-loader";
import { hot } from "react-hot-loader/root";

setConfig({
  reloadHooks: false,
});

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="container1">
      <BrowserRouter>
        {token ? <Navbar /> : ""}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} title="Contact" />
            <Route path="access" element={<Access />} />
            <Route path="aboutus" element={<About />} />
            <Route
              path="login"
              element={!token ? <LoginReg /> : <Navigate to="/" />}
            />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route
              path="api/user/reset/:id/:token"
              element={<ResetPassword />}
            />
          </Route>
          <Route
            path="/dashboard"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>

        {token ? <Foot /> : ""}
      </BrowserRouter>
    </div>
  );
}

export default hot(App);
