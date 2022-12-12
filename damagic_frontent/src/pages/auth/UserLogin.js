import { TextField, Button, Box, Alert, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
import { getToken, storeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/authSlice";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      const res = await loginUser(actualData);
      if (res.data.status === "success") {
        storeToken(res.data.token);
        navigate("/dashboard");
      }
      if (res.data.status === "failed") {
        setError({ status: true, msg: res.data.message, type: "error" });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };

  let token = getToken("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserToken({ token: token }));
  }, [token, dispatch]);

  return (
    <>
      <div className="container">
        <form
          className="container"
          component="form"
          noValidate
          id="login-form"
          onSubmit={handleSubmit}
        >
      
          <TextField
            id="email"
            required
            name="email"
            label="Standard"
            variant="standard"
            sx={{mb:3,width:300, }}
          />
          <br />
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="standard"
            sx={{mb:3,width:300 }}
          />
          <Box textAlign="center">
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1, mb: 2, px: 5 }}
              >
                Login
              </Button>
            )}
          </Box>
          {error.status ? (
            <Alert severity={error.type} sx={{ mt: 3 }}>
              {error.msg}
            </Alert>
          ) : (
            ""
          )}
        </form>
        <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
      </div>
    </>
  );
};

export default UserLogin;
