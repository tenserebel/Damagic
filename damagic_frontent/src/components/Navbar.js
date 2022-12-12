import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
const Navbar = () => {
  const token = getToken("token");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <img className="mainlogo" src="images/logo.jpeg" alt="" />
            </Typography>

            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/access"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              Access Damage
            </Button>

            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              to="/aboutus"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              About Us
            </Button>
            {token ? (
              <Button
                component={NavLink}
                to="/dashboard"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "yellow" : "" };
                }}
                sx={{ color: "black", textTransform: "none" }}
              >
                Dashboard
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/login"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "yellow" : "" };
                }}
                sx={{ color: "black", textTransform: "none" }}
              >
                Login/Registration
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
