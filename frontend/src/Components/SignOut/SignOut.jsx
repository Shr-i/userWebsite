import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import "./signout.css"

const SignOut = () => {
  const navigate = useNavigate();
  return (
    <div id="signoutContainer">
      <div>
        <div>
          <h1> You have successfully Logged Out! </h1>
        </div>
        <div className="btnContainer">
          <Button
            variant="contained"
            size='large'
            sx={{ m: 1, width: "45ch" , height: "50px"}}
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign-In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignOut;
