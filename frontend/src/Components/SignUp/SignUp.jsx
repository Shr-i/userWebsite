import React from "react";
import { signUpUser } from "../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Loader from "../Loader/Loader";
import "./signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const message = useSelector((state) => state.message);
  const error = useSelector((state) => state.error);
  const [open, setOpen] = useState(false);

  const [newUserFormDetail, setNewUserFormDetail] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    address: "",
    userName: "",
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
    dispatch(signUpUser(newUserFormDetail));
  };

  useEffect(() => {
    if( error || message ) {
      setOpen(true);
    }
    if (message) {
      setTimeout(() => {
        setNewUserFormDetail({
          firstName: "",
          lastName: "",
          address: "",
          emailId: "",
          userName: "",
          password: "",
        });
        navigate("/dashboard");
      }, 1000);
    }
  }, [message, error]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div id="userFormContainer">
      <div className="headContainer">
        <h1> Student Form </h1>
      </div>
      <div id="loadContainer" >{isLoading && <Loader />}</div>
      <div id="containers">
        <FormControl>
          <div className="fields">
            <TextField
              sx={{ m: 1, width: "50ch" }}
              type="text"
              id="standard-basic"
              size="medium"
              label="First Name"
              name="firstName"
              value={newUserFormDetail.firstName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="fields">
            <TextField
              sx={{ m: 1, width: "50ch" }}
              type="text"
              id="standard-basic"
              size="medium"
              label="Last Name"
              name="lastName"
              value={newUserFormDetail.lastName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="fields">
            <TextField
              sx={{ m: 1, width: "50ch" }}
              type="text"
              id="standard-basic"
              size="medium"
              label="EmailId"
              name="emailId"
              value={newUserFormDetail.emailId}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="fields">
            <TextField
              sx={{ m: 1, width: "50ch" }}
              type="text"
              id="standard-basic"
              size="medium"
              label="Address"
              name="address"
              value={newUserFormDetail.address}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="fields">
            <TextField
              sx={{ m: 1, width: "50ch" }}
              type="text"
              id="standard-basic"
              size="medium"
              label="User Name"
              name="userName"
              value={newUserFormDetail.userName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="fields">
            <TextField
              sx={{ m: 1, width: "50ch" }}
              type="password"
              id="standard-basic"
              size="medium"
              label="Password"
              name="password"
              value={newUserFormDetail.password}
              onChange={handleOnChange}
              required
            />
            <div className="btnContainer">
              <Button
                variant="contained"
                size="large"
                sx={{ m: 1, width: "50ch", height: '50px' }}
                onClick={handleSubmit}
              >
                Sign-Up
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
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

export default SignUp;
