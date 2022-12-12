import { Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import { ShoppingBag } from "@mui/icons-material";
import { useTitle } from "../../components/title";

const LoginReg = () => {
  function handleclick() {
    document.querySelector(".cont").classList.toggle("s-signup");
  }
  useTitle("Login");
  return (
    <>
      <div className="cont">
        <div className="form sign-in">
          <h2>Sign In</h2>
          <UserLogin />
          <div className="social-media">
            <ul>
              <li>
                <img src="images/facebook.png" />
              </li>
              <li>
                <img src="images/twitter.png" />
              </li>
              <li>
                <img src="images/linkedin.png" />
              </li>
              <li>
                <img src="images/instagram.png" />
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn" onClick={handleclick}>
              <span className="m-up">Sign Up</span>
              <span className="m-in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Sign up</h2>
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginReg;
