import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../Redux/Action/action";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Loader from "../Loader/Loader";
import "./signin.css";

const SignIn = () => {
  const isLoading = useSelector((state) => state.isLoading)
  const token = useSelector((state) => state.token);
  const message = useSelector((state) => state.message);
  const error = useSelector((state) => state.error);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newUserFormDetail, setNewUserFormDetail] = useState({
    emailId: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setNewUserFormDetail({
      ...newUserFormDetail,
      [e.target.name]: value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(newUserFormDetail));
  };

  useEffect(() => {
    if( error || message ) {
      setOpen(true);
    }
    if (token) {
      setTimeout(() => {
        setNewUserFormDetail({
          emailId: "",
          password: "",
        });
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }, 1000);
    }
  }, [token, error, message]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div id="userFormContainers">
      <div id="headContainers">
        <h1> SignIn </h1>
      </div>
      <div id="container">
        <FormControl>
          <div >
            <TextField
              sx={{ m: 1, width: "40ch" }}
              type="text"
              id="standard-basic"
              label="Email-Id"
              name="emailId"
              value={newUserFormDetail.emailId}
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <TextField
              sx={{ m: 1, width: "40ch" }}
              type="password"
              id="standard-basic"
              label="Password"
              name="password"
              value={newUserFormDetail.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div id="btnContainer">
            <Button
              variant="contained"
              size="large"
              sx={{ m: 1, width: "40ch", height: '55px' }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </FormControl>
      </div>
      <div id="loadContainer">{isLoading && <Loader />}</div>
      {!error ? (<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) :
      (<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default SignIn;
