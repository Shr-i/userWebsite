import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signOutUser } from "../../Redux/Action/action";
import auth from "../../utils/auth";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isAuth = auth();
  const dispatch = useDispatch();
  return (
    <div id="navbarContainer">
      <Link className="navLink" to={"/"}>
        {" "}
        Home{" "}
      </Link>
      <Link className="navLink" to={"/about"}>
        {" "}
        About{" "}
      </Link>
      <Link className="navLink" to={"/contact"}>
        {" "}
        Contact{" "}
      </Link>
      <div className="logActions">
        {!isAuth && (
          <Link className="navLink" to={"/signin"}>
            {" "}
            SignIn{" "}
          </Link>
        )}
        {isAuth && location.pathname !== "/signin" && (
          <Link
            className="navLink"
            to={"/signout"}
            onClick={() => {
              localStorage.clear();
              dispatch(signOutUser());
            }}
          >
            {" "}
            SignOut{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
