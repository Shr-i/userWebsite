import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="homeContainer">
      <div id="headContainer">
        <h1>Welcome to the User portal</h1>
      </div>
      <div id="routeContainer">
        <div className="logAction">
          <Button
            variant="contained"
            size="large"
            sx={{ m: 1, width: "20ch", height: '50px' }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            {" "}
            SignUp{" "}
          </Button>
          <div className="helperText">
            <h5>Don't have an account? </h5>
          </div>
        </div>
        <div className="logAction">
          <Button
            variant="contained"
            size="large"
            sx={{ m: 1, width: "20ch", height: '50px' }}
            onClick={() => {
              navigate("/signin");
            }}
          >
            {" "}
            SignIn{" "}
          </Button>
          <div className="helperText">
            <h5> Already have an account? </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
