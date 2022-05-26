import React from "react";
import HomeClients from "../components/Home/HomeClients/HomeClients";
import Navbar from "../components/Shared/Navbar/Navbar";
import Sidebar from "../components/Shared/SideBar/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        <HomeClients/>
      </div>
    </div>
  );
};

export default Home;
