import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
import "../main.css";
const Foot = () => {
  const token = getToken("token");
  return (
    <>
      <div>
        <hr style={{ marginTop: "2rem" }}></hr>
        <footer>
          <ul class="icons">
            <li>
              <a href="#">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li>
              <Button component={NavLink} to="/">
                Home
              </Button>
            </li>
            <li>
              <Button component={NavLink} to="/access">
                Access Damage
              </Button>
            </li>
            <li>
              <Button component={NavLink} to="/contact">
                Contact
              </Button>
            </li>
            <li>
              <Button component={NavLink} to="/aboutus">
                About Us
              </Button>
            </li>
            <li>
              <Button component={NavLink} to="/dashboard">
                Dashboard
              </Button>
            </li>
          </ul>
          <hr></hr>
          <div class="footer-copyright">
            <p>Copyright @ 2022 All Rights Reserved.</p>
          </div>
          <hr></hr>
        </footer>
      </div>
    </>
  );
};

export default Foot;
