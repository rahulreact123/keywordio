import React from "react";
import Navbar from "../Reusable/Navbar";
import "./home.css";
import Dashboard from "./Dashboard/Dashboard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
      <Dashboard/>
      </div>
    </div>
  );
};

export default Home;
