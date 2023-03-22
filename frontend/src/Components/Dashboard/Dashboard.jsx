import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingUserData } from "../../Redux/Action/action";
import OutlinedCard from "./userCard";
import Loader from "../Loader/Loader";
import "./dashboard.css";

const Dashboard = () => {
  const isLoading = useSelector((state) => state.isLoading );
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingUserData());
  },[dispatch]);
  return (
    <div id="locationContainer">
      <div id="headContainers">
      <h1>Dashboard </h1>
      </div>
      <div id="loadContainer" >{isLoading && <Loader />}</div>
      <div id="routeContainers">
        <div id="userDetailCard">
        {data && data.map((user) => (
        <div id="userCard" key={user.id}>
          {" "}
          <OutlinedCard id={user.id} name={user.name} username={user.username} email={user.email} />
        </div>
      ))}
    </div>

      </div>
    </div>
  );
};

export default Dashboard;
