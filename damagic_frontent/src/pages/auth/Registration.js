import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/userAuthApi";
import { storeToken } from "../../services/LocalStorageService";

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        const res = await registerUser(actualData);
        console.log(res);
        if (res.data.status === "success") {
          storeToken(res.data.token);
          navigate("/dashboard");
        }
        if (res.data.status === "failed") {
          setError({ status: true, msg: res.data.message, type: "error" });
        }
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <form
        className="container"
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        <TextField
          margin="normal"
          required
          id="name"
          name="name"
          label="Name"
          variant="standard"
          sx={{ width: 300 }}
        />
        <br />
        <TextField
          margin="normal"
          required
          id="email"
          name="email"
          label="Email Address"
          variant="standard"
          sx={{ width: 300 }}
        />
        <br />
        <TextField
          margin="normal"
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="standard"
          sx={{ width: 300 }}
        />
        <br />
        <TextField
          margin="normal"
          required
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          variant="standard"
          sx={{ mb: 3, width: 300 }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox value={true} color="primary" name="tc" id="tc" />}
          label="I agree to term"
          sx={{ ml: 6 }}
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Registration;
